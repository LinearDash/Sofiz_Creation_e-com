import Product from "../Models/product.model.js"
import Category from "../Models/category.model.js";
import { uploadOnCloudinary,destroyFromCloudinary } from "../Utils/cloudinary.js";

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

    searchCategory.product.push(newProduct._id);
    await searchCategory.save()

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
  console.log(`removeProduct has been reached`);
  
  try {
    const id = req.params.id;
    console.log(id)

    const product = await Product.findByIdAndDelete(id);

    if(!product){
      return res.status(404).json({message:"Product Not Found"})
    }
    const images = [product.itemImg1,product.itemImg2,product.itemImg3]
    await Category.updateOne(
      {_id:product.category},
      {$pull:{product:id}}
    )
    for(const img of images){
      if(img) await destroyFromCloudinary(img)
    }

    res.status(200).json({message:"Product deleted and Category Updated"});
    

  } catch (error) {
    console.log("Error in removeProduct controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
    
  }
}

export const modifyProduct = async(req,res)=>{
try {
  const {name,price,description,isAvailable,category}=req.body;
  const id = req.params.id;
  let {itemImg1,itemImg2,itemImg3}=req.body

  const product = await Product.findById(id);

  if(!product) return res.status(404).json({message:"Product not found"});

  const searchCategory = await Category.findOne({name:category});

  //    Return error if category is not found
  if(!searchCategory){
    return res.status(404).json({error:"Catogory not found"})
  }

  
  if(itemImg1){
    await destroyFromCloudinary(product.itemImg1);
    const uploadedResponse = await uploadOnCloudinary(itemImg1);
    itemImg1= uploadedResponse.secure_url;
  }
  if(itemImg2){
    await destroyFromCloudinary(product.itemImg2);
    const uploadedResponse = await uploadOnCloudinary(itemImg2);
    itemImg2= uploadedResponse.secure_url;
  }
  if(itemImg3){
    await destroyFromCloudinary(product.itemImg3);
    const uploadedResponse = await uploadOnCloudinary(itemImg3);
    itemImg3= uploadedResponse.secure_url;
  }

  product.item_name = name || product.item_name;
  product.item_price = price || product.item_price;
  product.description = description || product.description;
  product.isAvailable = isAvailable || product.isAvailable;
  product.category = searchCategory || product.category;
  product.itemImg1 = itemImg1 || product.itemImg1;
  product.itemImg2 = itemImg2 || product.itemImg2;
  product.itemImg3 = itemImg3 || product.itemImg3;
  
  await product.save();

  if (product.category.toString() !== searchCategory._id.toString()) {
    await Category.updateOne(
      { _id: product.category },
      { $pull: { product: id } }
    );
    searchCategory.product.push(product._id);
    await searchCategory.save();
  }

  res.status(200).json({message:`Product Updated Sucessfully`,product});

  

} catch (error) {
  console.log("Error in modifyProduct controller", error.message);
  res.status(500).json({ error: "Internal Server Error" });
}
}

export const getProductData = async(req,res)=>{
  try {
    
    
  } catch (error) {
    console.log("Error in getProductData controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }

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