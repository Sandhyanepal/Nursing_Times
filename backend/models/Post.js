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
        userId: {
            type: ObjectId,
            required: true,
            ref: "User",

        },
        // replace username with user id
        category:{
            type: ObjectId,
            required: true,
            ref: "Category",
        },
        views: {
            type: Number,
            default: 0, // Initialize the views count to 0
          },
        comments: [{
            type: ObjectId,
             ref:"Comment",
        }],
    },
    {timestamps: true}
);

module.exports = mongoose.model("Post", postSchema);

