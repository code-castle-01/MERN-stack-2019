require("dotenv").config();
const express = require("express");
const { appConfig } = require("./config");

const app = express();
const port = 3000;

app.listen(appConfig.port, () =>
  console.log(`Listen on Port: ${appConfig.port}`)
);
