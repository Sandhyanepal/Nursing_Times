const express = require('express');
const { addCategory, getAllCategory, updateCategory, getCategoryDetails, deleteCategory } = require('../controller/category');
const { requireAdmin } = require('../controller/User');
//const { categoryCheck, validation } = require('../validation');
const router = express.Router()

router.post('/addCategory', requireAdmin, addCategory)
router.get('/getAllCategory', getAllCategory)
router.get('/getcategory/:id', getCategoryDetails)
router.put('/updateCategory/:id', requireAdmin, updateCategory)
router.delete('/deletecategory/:id', requireAdmin, deleteCategory)


module.exports = router;


