const express = require('express')
const { register, login, updateUser, deleteUser, getUser, logout, getuserdetails, verifyEmail, resendVerification, forgetPassword, resetPassword } = require('../controller/user')
const { userCheck, validation } = require('../validation')
const router = express.Router()

router.post('/register', userCheck, validation, register)
router.get('/verify/:token', verifyEmail)
router.post('/resendverification', resendVerification)
router.post('/forgetpassword', forgetPassword)
router.post('/resetpassword/:token', resetPassword)
router.post('/login', login)
router.put('/updateuser/:id', updateUser)
router.delete('/deleteuser/:id', deleteUser)
router.get('/getuser/:id', getUser)
router.get('/logout',logout)
//router.get('/getusersList', getusersList)
router.get('/getuserdetails/:id', getuserdetails)

module.exports = router


