import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name:{
    type: String,
    require: true
  }
},{timestamps: true})

export default Category = mongoose.model("Category",categorySchema)