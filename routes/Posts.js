const express = require('express')
const { addpost, updatepost, getpost, deletepost } = require('../Controller/Post')
const router = express.Router()

router.post('/addpost', addpost);
router.put('/updatepost', updatepost);
router.get('/getpost', getpost);
router.delete('/deletepost', deletepost);

module.exports = router;