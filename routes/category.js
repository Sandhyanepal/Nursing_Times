const express = require('express');
const { addCategory, getAllCategory, updateCategory } = require('../controller/category');
const router = express.Router()

router.post('/addCategory', addCategory)
router.get('/getAllCategory', getAllCategory)
router.put('/updateCategory/:id', updateCategory)


module.exports = router;


