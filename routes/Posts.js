const express = require('express')
const { addpost, updatepost, getpost, deletepost, getpostByCategory, getAllpost } = require('../Controller/post')
const router = express.Router()

router.post('/addpost', addpost);
router.put('/updatepost', updatepost);
router.get('/getpost', getpost);
router.get('/getpostByCategory', getpostByCategory);
router.get('/getAllpost', getAllpost);
router.delete('/deletepost', deletepost);

module.exports = router;