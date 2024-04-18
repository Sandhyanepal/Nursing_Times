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
            res.status(200).json("Post Deleted!!!")
        }
        catch (err) {
            res.status(400).json(err.message);
        }        
    }
    else{
        res.status(401).json("You can delete only your posts!!!");
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





