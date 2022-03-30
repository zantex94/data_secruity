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
router.get("/vigenere_Cipher", function (req, res, next) {
  res.render("vigenére_Cipher", { title: "Vigenére Cipher"});
});
router.get("/caesar_Cipher", function (req, res, next) {
  res.render("caesar_Cipher", { title: "Caesar Cipher"});
});

module.exports = router;
