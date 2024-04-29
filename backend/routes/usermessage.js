const express = require('express')
const { submitUserMessage } = require('../controller/usermessage')
const router = express.Router()

router.post('/submitusermessage', submitUserMessage)

module.exports = router
