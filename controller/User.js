const User = require('../models/user');
const bcrypt = require('bcrypt')

// REGISTER
exports.register = async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashed_password
        });
    
        const user = await newUser.save()
        res.status(200).json(user);
    }
    catch(err){
        res.status(400).json(err.message);
    }
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
    if(req.body.userId === req.params.id){
        if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {
               $set: req.body, 
            }, {new: true})
            res.status(200).json(user);
        }
        catch(err){
        return res.status(400).json(err.message);
        }
    }
    else{
        res.status(401).json("You can update only your account!!!");
    }
 }


//  DELETE
exports.deleteUser = async (req, res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try{
            const user = await User.findByIdAndDelete(req.params.id, {
               $set: req.body, 
            }, {new: true})
            res.status(200).json(user);
        }
        catch(err){
        return res.status(400).json(err.message);
        }
    }
    else{
        res.status(401).json("You can update only your account!!!");
    }
 }


//  GET USER
exports.getUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }
    catch{
        return res.status(400).json(err.message);
    }
}






