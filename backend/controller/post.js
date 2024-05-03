const Post = require("../models/post");

//Create Post
exports.addpost = async (req, res) => {
    try {
        let post = await Post.create({
            title: req.body.title,
            description: req.body.description,
            username: req.body.username,
            category: req.body.category,
            image: req.file?.path
        })
        if (!post) {
            return res.status(400).json({ error: "Something went wrong" })
        }
        res.send(post)
    }
    catch (err) {
        res.status(400).json({error:err.message});
    }
};

//Update post
exports.updatePost = async (req, res) => {
    let post = await Post.findByIdAndUpdate(req.params.id, {
        $set: req.body,
    },{ new: true })
    if(req.file){
        post = await Post.findByIdAndUpdate(req.params.id,{
            image: req.file.path
        })
    }
    if (!post) {
        return res.status(400).json({ error: "You can update only your post!!!" })
    }
    res.send(post)
}

//Delete post
exports.deletePost = async (req, res) => {
    if (req.body.postId === req.params.id) {
        try {
            let post = await Post.findByIdAndDelete(req.params.id, {
                $set: req.body,
            }, { new: true })
            res.status(200).json({success:"Post Deleted!!!"})
        }
        catch (err) {
            res.status(400).json(err.message);
        }        
    }
    else{
        res.status(401).json({error:"You can delete only your posts!!!"});
    }
}

//Get post By Id
exports.getPost = async (req, res) => {
        let post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(400).json({ error: "Post not found" })
        }
        res.send(post);
}

//Get Posts by Category
exports.getPostByCategory = async (req, res) => {
    let posts = await Post.find({ category: req.params.category_name});
    if (!posts) {
        return res.status(400).json({ error: "Something went wrong" });
    }
    res.send(posts);
}

//get all post
exports.getAllPosts = async (req, res) => {
    let posts = await Post.find()
    if(!posts){
        return res.status(400).json({ error: "Something went wrong" });
    }
    res.send(posts);
}

//comment
// exports.comment = (req, res) => {
    // let comment = req.body.comment
    // comment.postedBy = req.body.userId

    // post = Post.findByIdAndUpdate(req.params.id, {
    //     $set: req.body,
    // },{ new: true })
    // if(!comment){
    //     return res.status(400).json({ error: "Something went wrong" });
    // }
    // res.send(comment);

//     const comment={
//         comment: req.body.text,
//         postedBy: req.user._id
//     }
//     post = Post.findByIdAndUpdate(req.body.postId,{
//         $push: {comments:comment}
//     },{
//         new: true
//     })
//     .exec((err, result) => {
//         if (err) {
//                 return res.status(400).json({ error: "Something went wrong" });
//         }
//         else{
//         res.json(result)
//         }
// })
// }




exports.Comment = async (req, res) => {
  try {
    const { text, postId, userId } = req.body;
    const comment = {
      comment: text,
      postedBy: userId
    };
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $push: { comments: comment } },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};








