const express = require('express')
const { addpost, updatepost, getpost, deletepost, getpostByCategory, getAllpost } = require('../controller/post')
const router = express.Router()

router.post('/addpost', addpost);
router.put('/updatepost/:id', updatepost);
router.get('/getpost/:id', getpost);
router.get('/getpostByCategory/:category_id', getpostByCategory);
router.get('/getAllpost', getAllpost);
router.delete('/deletepost', deletepost);

module.exports = router;