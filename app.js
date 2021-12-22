const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

const HOST = "127.0.0.1";
const PORT = 3001;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hi");
  console.log("home page");
});

server.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
