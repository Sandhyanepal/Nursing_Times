const Post = require("../models/Post");

//Create Post
exports.addpost = async(req,res) => {
     if(!req.post){
        return res.status(500).json({error:"Please upload an image"})
     }
    let post = await Post.create({
        title: req.body.title,
        description: req.body.description,
        username: req.body.username,
        category: req.body.category
    })
    if(!post){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(post)
};

//update post
exports.updatepost = async(req,res) => {
    let post = await Post.findByIdAndUpdate(req.params.id,{
        title: req.body.title,
        description: req.body.description,
        username: req.body.username,
        category: req.body.category
    },
    {new: true})
    if(req.file){
        post = await post.findByIdAndUpdate(req.params.id, {
            image: req.file?.path
        })
    }
    if(!post){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(post)
}

//get post
exports.getpost = async(req,res) => {
    let post = await Post.findById(req.params.id);
    if (!post){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(products);
}

//get post of a category
exports.getpostByCategory = async(req,res) =>{
    let post = await Post.find({category: req.params.category_id}).populate('category', 'category_name');
    if(!post) {
        return res.status(400).json({ error: "Something went wrong" });
    }
    res.send(post);
}

delete post
exports.deletepost = (req,res) => {
        Post.findByIdAndDelete(req.params.id)   
        .then(post =>{
                if(!post){
                        return res.status(400).json({error:"Post not found"});
                    }
                    res.send({message:"Post deleted successsfully"})
                })
                .catch(error=> res.status(400).json({error:error.message}))
            }
                       
           
                    