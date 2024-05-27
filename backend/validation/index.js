const {check, validationResult} = require('express-validator')



const validation = (req,res,next) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()[0].
            msg.toString()})
    }
    next()
} 

const userCheck = [
    check('username',"username is required").notEmpty()
    .isLength({min:3}).withMessage("Username must be at least 3 characters"),
    check('email',"Email is required").notEmpty()
    .isEmail().withMessage("Email format incorrect"),
    check('password',"Password is required").notEmpty()
    .matches('[a-z]').withMessage("Password must consist of at least 1 lowercase letter")
    .matches('[A-Z]').withMessage("Password must consist of at least 1 uppercase letter")
    .matches('[0-9]').withMessage("Password must consist of at least 1 number")
    .matches('[+@!#$%]').withMessage("Password must consist of at least 1 special character")
    .isLength({min: 8}).withMessage("Password must be at least 8 characters")
    .isLength({max: 20}).withMessage("Password must not exceed 20 characters")
    .not().isIn(['P@ssW0rd']).withMessage("Cannot use this password")
]

const categoryCheck = [
    check('category_name', "Category name is required").notEmpty()
    .isLength({min:5}).withMessage("Category name must be at least 5 characters")
    .isLength({max:50}).withMessage("Category name must not exceed 50 characters"),
]

const postCheck = [
    check('title', "Title is required").notEmpty()
    .isLength({ min: 3 }).withMessage("Title must be at least 3 characters"),
    check('description', "Description is required").notEmpty()
    .isLength({min:10}).withMessage("Description must be at least 10 characters"),
    check('image').optional().isURL().withMessage("Image must be a valid URL"),
    check('userId', "User ID is required").notEmpty()
    .isMongoId().withMessage("User ID must be a valid MongoDB ID"),
    check('category', "Category is required").notEmpty()
    .isMongoId().withMessage("Category ID must be a valid MongoDB ID"),
] 

const usermsgCheck = [
    check('name',"username is required").notEmpty()
    .isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),
    check('email', "Email is required").notEmpty()
    .isEmail().withMessage("Email format is incorrect"),
    check('message').optional().isLength({ min: 5 }).withMessage("Message must be at least 5 characters")
];

module.exports = {validation , userCheck, categoryCheck, postCheck, usermsgCheck}