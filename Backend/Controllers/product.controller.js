import Product from "../Models/product.model.js"
import Category from "../Models/category.model.js";

export const addProduct = async(req,res)=>{
  try {
    const{
      item_name,
      item_price,
      description,
      isAvailable,
      itemImg1,
      itemImg2,
      itemImg3,
      categoryName
    }=req.body

    //    Finding the catogory in DB
    const searchCategory = await Category.findOne({name:categoryName});

    //    Return error if category is not found
    if(!searchCategory){
      return res.status(404).json({error:"Catogory not found"})
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
    res.status(500).json(newProduct)

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

  const existingCategory = await Category.findOne({name:name})
  
} catch (error) {
  console.log("Error in createCategory controller", error.message);
  res.status(500).json({ error: "Internal Server Error" });
}
}