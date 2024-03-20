const Category = require('../models/category')

exports.addCategory = async(req,res)=>{
    category = await Category.create({
        category_name: req.body.category_name
    })
    if(!category){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(category)
}

exports.getCategory = async(req,res)=>{
    let category = await Category.find()
    if(!category){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(category)
}
