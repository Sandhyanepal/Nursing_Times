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
            required: false,
            ref: "Category",
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Post", postSchema);

