const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

let PORT = process.env.PORT || 3000;

var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");
app.use(routes);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Server listening at localhost:" + PORT);
    });
});