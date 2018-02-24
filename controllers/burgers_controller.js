const express = require("express");
var router = express.Router();
const db = require("../models");

//  Routes
router.get("/", function (req, res) {
    db.Burger.findAll().then(data => {
        res.render("index", { burgers: data });
    });
});

router.post("/api/burgers", function (req, res) {
    db.Burger.create(req.body).then(function(dbBurger){
        res.json(dbBurger);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    db.Burger.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: req.body.id
        }
    }).then(function(dbBurger){
        res.json(dbBurger);
    });
});

module.exports = router;