const express = require('express')
const router = express.Router()

const info = require('./handlers/info')


router
	.route('/')
	.post(info)

module.exports = router