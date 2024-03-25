const express = require('express')
const { register, login, updateUser, deleteUser, getUser, logout, getusersList, getuserdetails } = require('../controller/user')
const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.put('/updateuser/:id', updateUser)
router.delete('/deleteuser/:id', deleteUser)
router.get('/getuser/:id', getUser)
router.get('/logout',logout)
router.get('/getusersList', getusersList)
router.get('/getuserdetails/:id', getuserdetails)

module.exports = router


