const express = require('express')
const { addpost, updatePost, getPost, deletePost, getPostByCategory, getAllPosts } = require('../controller/post');
const upload = require('../utils/fileUpload');
const { requireAdmin } = require('../controller/User');
const router = express.Router()

router.post('/addpost',  upload.single('image'), addpost);
router.put('/updatepost/:id',  upload.single('image'), updatePost);
router.delete('/deletepost/:id',  deletePost);
router.get('/getpost/:id', getPost);
router.get('/getpostbycategory/:category_name', getPostByCategory);
router.get('/getallposts', getAllPosts);


module.exports = router;