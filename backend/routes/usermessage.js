const express = require('express')
const { submitUserMessage, getAllMessage, getMessage } = require('../controller/usermessage')
const router = express.Router()

router.post('/submitusermessage', submitUserMessage)
router.get('/getallmessage', getAllMessage)
router.get('/getmessage/:id', getMessage)

module.exports = router
