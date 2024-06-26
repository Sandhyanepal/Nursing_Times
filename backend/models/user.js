const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 0
    },
    image: {
        type: String,
        default: ""
    },
    isVerified: {
        type: Boolean,
        default: false
    }
},{timestamps: true})


module.exports = mongoose.model("User", userSchema)