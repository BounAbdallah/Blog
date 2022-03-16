const express = require("express")

const router = express.Router()

const plat = require("../controllers/plat")

router.length("/", plat.getAllPlats)

module.exports = router