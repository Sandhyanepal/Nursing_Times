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
    .isLength({min:5}).withMessage("Username must be at least 5 characters"),
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

module.exports = {validation , userCheck}