const express = require('express')
const { register, login, updateUser, deleteUser, getUser } = require('../controller/user')
const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.put('/updateuser/:id', updateUser)
router.delete('/deleteuser/:id', deleteUser)
router.get('/getuser/:id', getUser)

module.exports = router