const express = require('express');
const { addCategory, getAllCategory, updateCategory, getCategoryDetails, deleteCategory } = require('../controller/category');
//const { categoryCheck, validation } = require('../validation');
const router = express.Router()

router.post('/addCategory', addCategory)
router.get('/getAllCategory', getAllCategory)
router.get('/getcategory/:id', getCategoryDetails)
router.put('/updateCategory/:id', updateCategory)
router.delete('/deletecategory/:id', deleteCategory)


module.exports = router;


