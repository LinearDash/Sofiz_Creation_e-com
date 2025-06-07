import Product from "../Models/product.model.js"
import Category from "../Models/category.model.js";
import { uploadOnCloudinary } from "../Utils/cloudinary.js";

export const addProduct = async(req,res)=>{
  try {
    const{
      item_name,
      item_price,
      description,
      isAvailable,
      categoryName
    }=req.body
    let{
      itemImg1,
      itemImg2,
      itemImg3,
    }=req.body;

    //    Finding the catogory in DB
    const searchCategory = await Category.findOne({name:categoryName});

    //    Return error if category is not found
    if(!searchCategory){
      return res.status(404).json({error:"Catogory not found"})
    }
    if(itemImg1){
      const uploadedResponse =await uploadOnCloudinary(itemImg1);
      itemImg1= uploadedResponse.secure_url;
    }
    if(itemImg2){
      const uploadedResponse =await uploadOnCloudinary(itemImg2);
      itemImg2 = uploadedResponse.secure_url;
    }
    if(itemImg3){
      const uploadedResponse =await uploadOnCloudinary(itemImg3);
      itemImg3 = uploadedResponse.secure_url;
    }

    const newProduct = new Product({
      item_name,
      item_price,
      description,
      isAvailable,
      itemImg1,
      itemImg2,
      itemImg3,
      category:searchCategory._id,
    })
    
    if(newProduct){

    await newProduct.save()
    res.status(201).json(newProduct)

    }
    else{
      res.status(400).json({ error: "Invalid product data" });
    }

  } catch (error) {
    console.log("Error in addProduct controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }

}

export const removeProduct = async(req,res)=>{

}

export const modifyProduct = async(req,res)=>{

}

export const getProductData = async(req,res)=>{

}

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