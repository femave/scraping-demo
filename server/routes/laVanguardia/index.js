const express = require('express')
const router = express.Router()

const info = require('./handlers/info')


router
	.route('/')
	.get(info)

module.exports = router