const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema

const commentSchema = new mongoose.Schema(
    {
        post:{
            type: ObjectId,
            ref: "Post"
        },
        comment_msg: {
            type: String,
            required: true,
          },
          created: {
            type: Date,
            default: Date.now,
          },
          postedBy: {
            type: ObjectId,
            ref: "User",
          },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Comment", commentSchema)