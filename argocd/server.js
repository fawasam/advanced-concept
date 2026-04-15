const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 GitOps App Running 4");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(3000, () => console.log("Server running"));