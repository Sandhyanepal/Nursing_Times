const Category = require('../models/category')

exports.addCategory = async(req,res)=>{
    category = await Category.create({
        category_name: req.body.category_name
    })
    category = await category.save()
    if(!category){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(category)
}


exports.getAllCategory = async(req,res)=>{
    let category = await Category.find()
    if(!category){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(category)
}

exports.updateCategory = async(req,res) =>{
    let category = await Category.findByIdAndUpdate(req.params.id, {
        category_name: req.body.category_name
    }, {new:true})
    if(!category){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(category)
}
