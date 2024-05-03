const mongoose = require("mongoose")
const {ObjectId} =mongoose.Schema

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false,
        },
        username: {
            type: String,
            required: true,
        },
        category:{
            type: ObjectId,
            required: true,
            ref: "Category",
        },
        // comments: {
        //     type: String,
        //     created: [{type:Date, default:Date.now}],
        //     postedBy: {type: ObjectId, ref:"User"},
        // },
        comments: [{
            comment: {type: String},
            postedBy: {type:ObjectId, ref:"User"}
        }],
    },
    {timestamps: true}
);

module.exports = mongoose.model("Post", postSchema);

