import mongoose, { Types } from "mongoose";

const categorySchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  product:[{
    
  }]

},{timestamps: true})
const Category = mongoose.model("Category",categorySchema);

export default Category;