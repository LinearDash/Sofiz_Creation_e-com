import Product from "../Models/product.model.js"
import Category from "../Models/category.model.js";
import { response } from "express";

export const createCategory = async(req,res)=>{
  try {
    const {name}= req.body;
    console.log(name);
  
    if (!name || name.trim() === "") {
      return res.status(400).json({ error: "Category name is required" });
    }
    
  
    const existingCategory = await Category.findOne({name:name})
  
    if(existingCategory){
      return res.status(400).json({error:"Category already exists"})
    }
    const newCategory = new Category({ name });
  
    await newCategory.save();
  
    res.status(201).json(newCategory);
    
  } catch (error) {
    console.log("Error in createCategory controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
  }

export const deleteCategory = async(req,res)=>{

}

export const getCategoryData = async(req,res)=>{
  try {
    const {name} = req.body;

    const category = await Category.findOne({name:name}).populate('product');

    if(!category) return res.status(404).json({error:`Category doesn't exsites!`});
    // console.log(category);
    
    return res.status(200).json(category);

  } catch (error) {
    console.log("Error in getCategoryProduct controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
export const getAllCategories = async (req, res)=>{
  try {
    const categories = await Category.find({}).populate("product").populate("name");

    res.status(400).json(categories)
  } catch (error) {
    console.log(`Error in getAllCategories controller`,error.message);
    res.status(500).json({error:"Internal Server Error"})
  }
}