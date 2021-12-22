const router = require("express").Router();
const cheerio = require("cheerio");
const axios = require("axios");
const { getUrlInfo } = require("../controllers/urlController");
router.post("/", getUrlInfo);

module.exports = router;
