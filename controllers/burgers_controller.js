const express = require("express");
var router = express.Router();

const burger = require("../models/burger");

//  Routes
router.get("/", function (req, res) {
    burger.getAll(function (data) {
        res.render("index", { burgers: data });
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create(req.body, function (result) {
        res.json({ id: result.insertID });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    burger.update({ devoured: req.body.devoured }, { id: req.body.id }, function (result) {
        if (result.changedRows == 0)
            return res.status(404).end();
        else
            res.status(200).end();
    });
});

module.exports = router;