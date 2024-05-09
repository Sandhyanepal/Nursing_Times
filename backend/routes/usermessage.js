const express = require('express')
const { submitUserMessage, getAllMessage } = require('../controller/usermessage')
const router = express.Router()

router.post('/submitusermessage', submitUserMessage)
router.get('/getAllMessage', getAllMessage)

module.exports = router
