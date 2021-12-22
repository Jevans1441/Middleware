const http = require("http");
const express = require("express");
const morgan = require("morgan");
const logger = morgan("tiny");
const app = express();
const server = http.createServer(app);
const db = require("./db");
const { name } = require("ejs");

const HOST = "127.0.0.1";
const PORT = 3001;

app.use(logger);
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("partials/home");
  console.log("home page");
});

app.get("/ceos", (req, res) => {
  res.render("partials/ceo-list", {
    data: db,
  });
});

app.get("/:slug", (req, res) => {
  let link = req.params.slug;
  const ceo = db.find((ceo) => ceo.slug === link);
  res.render("partials/ceo-details", { name: ceo.name, year: ceo.year });
});

server.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
