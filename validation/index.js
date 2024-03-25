// const {check,validationResult} = require('express-validator')

// const categoryCheck = [
//     check('category_name', "Category name is required").notEmpty()
//     .isLength({min:3}).withMessage("Category name must be at least 3 character")
// ]

// const validation = (req,res,next) =>{
//     const errors = validationResult(req)
//     if(!errors.isEmpty()){
//         return res.status(400).json({error:errors.array()[0].
//             msg.toString()})
//     }
//     next()
// } 

// const postCheck =[
//     check('title',"Post name is required").notEmpty()
//     .isLength({min:3}).withMessage("Post name must be at least 3 characters"),
//     check('description',"Description is required").notEmpty()
//     .isLength({min:10}).withMessage("Description must be at least 10 characters"),
//     check('username',"User name is required").notEmpty()
//     .isLength({min:3}).withMessage("User name must be at least 3 characters"),
//     check('category',"Category is required").notEmpty()
//     .matches(/^[0-9a-f]{24}$/).withMessage("Invalid Category")
// ]


// module.exports = {categoryCheck, validation, postCheck}