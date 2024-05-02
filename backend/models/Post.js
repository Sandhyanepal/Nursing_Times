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
        views: {
            type: Number,
            default: 0, // Initialize the views count to 0
          },
        comments: {
            type: String,
            created: [{type:Date, default:Date.now}],
            postedBy: {type: ObjectId, ref:"User"},
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Post", postSchema);

