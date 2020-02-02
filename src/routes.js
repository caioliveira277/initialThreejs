const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.status(200).json({
    message: "ThreeJs Project examples",
    version: "0.1"
  });
});

routes.get("/example1", (req, res) => {
  res.render("index.html");
});

module.exports = routes;
