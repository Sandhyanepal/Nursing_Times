const User = require('../models/user');
const bcrypt = require('bcrypt')
const Token = require('../models/token')
const crypto = require('crypto')
const sendEmail = require('../utils/emailSender');

// REGISTER
exports.register = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashed_password
        });

        const user = await newUser.save()
        res.status(200).json(user);


        // Generate Token
        const token = await Token.create({
            token: crypto.randomBytes(24).toString('hex'),
            user: newUser._id
        })
        if(!token){
            return console.log("Failed to generate token");
        }

        // Send Verification Email
        const URL = `http://localhost:5000/verify/${token.token}`
        sendEmail({
            from: "noreply@something.com",
            to: req.body.email,
            subject: "Verification Email",
            text: "Please copy the following link in the browser to verify your email" + URL,
            html: `<a href='${URL}'><button>Verify Email</button></a>`
        })

    }
    catch (err) {
        res.status(400).json(err.message);
    }
}


// VERIFY EMAIL
exports.verifyEmail = async (req, res) => {
    // Check if token is correct or not
    let token = await Token.findOne({token: req.params.token})
    if(!token){
        res.status(400).json({error: "Token not found, or may have expired"})
    }

    // find user associatrd with token
    let user = await User.findById(token.user)
    if(!user){
        res.status(400).json({error: "Usernot found"})
    }

    // Check if user is already verified
    if(user.isVerified){
       return res.status(400).json({error: "User already verified. Login to continue"})
    }

    // Verify User
    user.isVerified = true
    user = await user.save()
    if(!user){
        res.status(400).json({error: "Failed to verify, please try again later"})
    }
    res.send({message: "User verified successfully"})
    
}


// TO RESEND VERIFICATION EMAIL
exports.resendVerification = async (req, res) => {
    // check if email is registered or not
    let user = await User.findOne({email: req.body.email})
    console.log(user);
    if(!user){
       return res.status(400).json({error: "Email not registered"})
    }
    // Generate Token
    const token = await Token.create({
        token: crypto.randomBytes(24).toString('hex'),
        user: user._id
    })
    if(!token){
        return console.log("Failed to generate token");
    }

    // Send Verification Email
    const URL = `http://localhost:5000/verify/${token.token}`
    sendEmail({
        from: "noreply@something.com",
        to: req.body.email,
        subject: "Verification Email",
        text: "Please copy the following link in the browser to verify your email" + URL,
        html: `<a href='${URL}'><button>Verify Email</button></a>`
    })

    res.send({message: "Verification link has been send to your email"})
}


// FORGET PASSWORD
exports.forgetPassword = async (req,res) => {
    // check if email exist
    let user = await User.findOne({email: req.body.email})
    if(!user){
       return res.status(400).json({error: "Email not registered"})
    }
    // Generate Token
    const token = await Token.create({
        token: crypto.randomBytes(24).toString('hex'),
        user: user._id
    })
    if(!token){
        return console.log("Failed to generate token");
    }
    // send password reset link in email
    const URL = `http://localhost:5000/resetpassword/${token.token}`
    sendEmail({
        from: "noreply@something.com",
        to: req.body.email,
        subject: "Password Reset link",
        text: "Please copy the following link in the browser to reset password" + URL,
        html: `<a href='${URL}'><button>Reset Password</button></a>`
    })
    res.send({message: "Password reset link has been send to your email"})
}


// TO RESET PASSWORD
exports.resetPassword = async (req,res) => {
    // check if token is valid or not
    let token = await Token.findOne({token: req.params.token})
    if(!token){
        return res.status(400).json({error: "Invalid token or token may have expired"})
    }
    // find user
    let user = await User.findById(token.user)
    if(!user){
        return res.status(400).json({error: "User not found"})        
    }
    // update password
    user.password = req.body.password
    user = await user.save()
    if(!user){
        return res.status(400).json({error: "Something went wrong"})      
    }
    res.send({message:"Password has been changed successfully."})
}


// LOGIN
exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).json("No such user");
        }

        const validated = await bcrypt.compare(req.body.password, user.password);
        if (!validated) {
            return res.status(400).json("Wrong password");
        }

        // If login is successful, send user data without password
        const { password, ...others } = user._doc;
        return res.status(200).json(others);
    }
    catch (err) {
        // Handle any unexpected errors
        console.error(err);
        return res.status(400).json(err.message);
    }
};




// UPDATE
exports.updateUser = async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true })
            res.status(200).json(user);
        }
        catch (err) {
            res.status(400).json(err.message);
        }
    }
    else {
        res.status(401).json("You can update only your account!!!");
    }
}


//  DELETE
exports.deleteUser = async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const user = await User.findByIdAndDelete(req.params.id, {
                $set: req.body,
            }, { new: true })
            res.status(200).json(user);
        }
        catch (err) {
            return res.status(400).json(err.message);
        }
    }
    else {
        res.status(401).json("You can delete only your account!!!");
    }
}


//  GET USER
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    }
    catch {
        return res.status(400).json(err.message);
    }
}


//log out
exports.logout = (req, res) =>{
    return res.clearCookie('myCookie')
}

//get userlist
exports.getusersList = async(req,res) => {
    let users = await User.find()
    if(!users){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(users)
}


//get userdetails
exports.getuserdetails = async(req,res) => {
     let user = await User.findById(req.params.id)
     if(!user){
        return res.status(400).json({error:"Something went wrong"})
     }
     res.send(user)
}





