const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
app.get("/", function (req, res) {
  res.send("get request k ander ho tum abhi");
});
const personRoutes = require('./routes/personRouter');
const menuRoutes = require('./routes/menuRoutes')
app.use('/person', personRoutes)
app.use('/menu', menuRoutes)
app.listen(3000, () => {
  console.log("server connected");
});
