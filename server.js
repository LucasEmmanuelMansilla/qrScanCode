const express = require("express");
const app = express();

app.get("/.well-known/assetlinks.json", (req, res) => {
  res.sendFile("assetlinks.json", { root: __dirname + "/public/.well-known" });
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
