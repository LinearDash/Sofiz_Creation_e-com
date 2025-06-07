import mongoose, { Types } from "mongoose";

const categorySchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  product:[{
    type: Types.ObjectId,
    ref: "Product"
  }]

},{timestamps: true})
const Category = mongoose.model("Category",categorySchema);

export default Category;