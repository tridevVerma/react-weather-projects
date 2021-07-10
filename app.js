const express = require("express");
const app = express();
const port = process.env.port || 3000;
const path = require("path");
const hbs = require("hbs");

const staticPath = path.join(__dirname, "./public");
const template_path = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("error");
});

app.listen(port, () => {
  console.log(`connected at port : ${port}`);
});
