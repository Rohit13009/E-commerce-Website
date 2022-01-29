const express = require("express");
const router = express.Router();
const accountController = require("../controller/account");

router.get("/account",accountController.accountPage)
router.post("/")

module.exports = router;