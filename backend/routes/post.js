const express = require('express')
const { addpost, updatePost, getPost, deletePost, getPostByCategory, getAllPosts, Comment, getAllComment, deleteComment, getPostsByUser, getAllPostsSortedByViews } = require('../controller/post');
const upload = require('../utils/fileUpload');
const { postCheck, validation } = require('../validation');
const router = express.Router()

router.post('/addpost',   upload.single('image'),postCheck, validation, addpost);
router.put('/updatepost/:id',  upload.single('image'), updatePost);
router.delete('/deletepost/:id',  deletePost);
router.get('/getpost/:id', getPost);
router.get('/getpostbycategory/:category_name', getPostByCategory);
router.get('/getallposts', getAllPosts);
router.get('/posts/user/:userId', getPostsByUser);
router.post('/posts/:postId/comments', Comment)
router.get('/posts/:postId/comments', getAllComment)
router.delete('/deletecomment/:id', deleteComment)
router.get('/getpostsbyviews', getAllPostsSortedByViews)


module.exports = router;