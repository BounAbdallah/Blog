const express = require('express')

const router = express.Router()

const plat = require('../controllers/plat')

router.get('/', plat.getAllPlats)

module.exports = router