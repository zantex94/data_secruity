var express = require("express");
const { json } = require("express/lib/response");
var router = express.Router();
// var models = require('../model/models.js');


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("forside", { title: "Express" });
});
router.get("/forside", function (req, res, next) {
  res.render("forside", { title: "Forside" });
});
router.get("/one_time_Pad", function (req, res, next) {
  res.render("one_time_Pads", { title: "One time pad"});
});

module.exports = router;
