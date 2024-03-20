const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
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
            type: String,
            required: false,
            // enum: ["health","medicine"]
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Post", postSchema);

