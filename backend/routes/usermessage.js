const express = require('express')
const { submitUserMessage, getAllMessage, getMessage } = require('../controller/usermessage')
const { usermsgCheck, validation } = require('../validation')
const router = express.Router()

router.post('/submitusermessage',usermsgCheck, validation, submitUserMessage)
router.get('/getallmessage', getAllMessage)
router.get('/getmessage/:id', getMessage)

module.exports = router
