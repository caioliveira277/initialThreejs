const express = require("express");
const app = express();
const routes = require("../routes");
const path = require("path");

app.use(express.static(path.join(__dirname, "..", "..", "/public")));
app.set("views", path.join(__dirname, "..", "..", "/public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(routes);

app.listen(3000);
