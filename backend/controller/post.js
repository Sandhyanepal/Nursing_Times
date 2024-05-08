const Post = require("../models/Post");
const Comment = require("../models/comments");
const User = require("../models/user")

//Create Post
exports.addpost = async (req, res) => {
  try {
    let post = await Post.create({
      title: req.body.title,
      description: req.body.description,
      userId: req.body.userId,
      category: req.body.category,
      image: req.file?.path,
    });
    if (!post) {
      return res.status(400).json({ error: "Something went wrong" });
    }
    res.send(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//Update post
exports.updatePost = async (req, res) => {
  let post = await Post.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  if (req.file) {
    post = await Post.findByIdAndUpdate(req.params.id, {
      image: req.file.path,
    });
  }
  if (!post) {
    return res.status(400).json({ error: "You can update only your post!!!" });
  }
  res.send(post);
};

//Delete post
exports.deletePost = async (req, res) => {
  console.log(req.body);
  let post = await Post.findById(req.params.id).populate("userId");
  if (!post) {
    return res.status(400).json({ error: "POst not found" });
  }
  let user = await User.findById(req.body.id);
  if (user.role != 1) {
    if (post.userId._id != req.body.id) {
      console.log(post);
      return res
        .status(401)
        .json({ error: "You can delete only your posts!!!" });
    }
  }
  post = await Post.findByIdAndDelete(req.params.id);

  if (!post) {
    return res.status(400).json({ error: "Something went wrong" });
  }
  res.status(200).json({ success: "Post Deleted!!!" });
};

// Increment post views
const incrementPostViews = async (postId) => {
  try {
    const post = await Post.findById(postId);
    if (post) {
      post.views += 1; // Increment views count
      await post.save();
    }
  } catch (error) {
    console.error("Error incrementing post views:", error);
  }
};

//Get post By Id
exports.getPost = async (req, res) => {
  // Increment views count
  await incrementPostViews(req.params.id);

  let post = await Post.findById(req.params.id).populate("userId");
  if (!post) {
    return res.status(400).json({ error: "Post not found" });
  }
  res.send(post);
};

//Get Posts by Category
exports.getPostByCategory = async (req, res) => {
  let posts = await Post.find({ category: req.params.category_name }).populate(
    "userId"
  );
  if (!posts) {
    return res.status(400).json({ error: "Something went wrong" });
  }
  res.send(posts);
};

//get all post
exports.getAllPosts = async (req, res) => {
    let posts = await Post.find().populate('userId')
    if (!posts) {
        return res.status(400).json({ error: "Something went wrong" });
    }
    res.send(posts);
}

// Get post by user
exports.getPostsByUser = async (req, res) => {
    let userId = req.params.userId;
    try {
        let posts = await Post.find({ userId }).populate('userId');

        console.log("Posts:", posts);

;        if (!posts) {
            return res.status(404).json({ error: 'Posts not found' });
        }
        res.send(posts);
        
    } catch (error) {
        console.error('Error fetching posts by user:', error);
        res.status(500).json({ error: 'An error occurred while fetching posts by user' });
    }
};


//Add comment
exports.Comment = async (req, res) => {
  try {
    const { comment_msg, postId, userId } = req.body;
    const comment = new Comment({
      comment_msg: comment_msg,
      postedBy: userId,
      post: postId,
    });
    const savedComment = await comment.save();

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $push: { comments: savedComment._id } },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// View comment
exports.getAllComment = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId }).populate(
    "postedBy"
  );
  if (!comments) {
    res.status(400).json({ error: "Something went wrong" });
  }
  res.send(comments);
};

// Delete comment
exports.deleteComment = async (req, res) => {
    const commentId = req.params.id;
    try {
        // Find the comment by its ID and populate the associated user fields
        let comment = await Comment.findById(commentId)
            .populate('post', 'userId') // Populating the 'post' field to access 'userId'
            .populate('postedBy'); // Populating the 'postedBy' field to access 'role'

            console.log('Comment:', comment); // Log the populated comment object
            
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        // Check if the user is an admin, the owner of the post, or the author of the comment
        let user = await User.findById(req.body.id)
        console.log("user",user)

        if (user.role == 1 || 
            (comment.post.userId?.toString() == user._id) || 
            (comment.postedBy._id?.toString() == user._id)) {
            // Allow deletion by admin, owner of the post, or author of the comment
            await Comment.findByIdAndDelete(commentId);
            return res.json({ success: 'Comment deleted successfully' });
        }

        // If none of the above conditions are met, user is not authorized to delete the comment
        return res.status(403).json({ error: 'Unauthorized to delete this comment' });
    } catch (error) {
        console.error('Error deleting comment:', error);
        return res.status(500).json({ error: 'An error occurred while deleting the comment' });
    }
};



//     // If none of the above conditions are met, user is not authorized to delete the comment
//     return res
//       .status(403)
//       .json({ error: "Unauthorized to delete this comment" });
//   } catch (error) {
//     console.error("Error deleting comment:", error);
//     return res
//       .status(500)
//       .json({ error: "An error occurred while deleting the comment" });
//   }
// };
