require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;

const urlRoutes = require("./routes/urlRoutes");

app.use(cors());

app.use(express.json());

app.use("/urls", urlRoutes);

app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});
