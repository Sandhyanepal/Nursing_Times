const mongoose = require('mongoose')
const usermsgSchema = mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        required: true
    },
    message:{
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model("Usermessage", usermsgSchema)