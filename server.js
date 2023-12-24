const express = require("express");
const path = require("path");

const port = process.env?.PORT ?? 8080;

const distPath = path.resolve("dist");
const app = express();

app.use("/", express.static(distPath));

app.listen(port, () => {
  console.log("listening on port", port);
});
