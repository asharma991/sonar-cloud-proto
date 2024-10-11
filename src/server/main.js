import express from "express";
import ViteExpress from "vite-express";

var app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Vite!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
