import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique:true,
    trim:true
  },
  email:{
    type: String,
    required:true,
    unique: true,
    lowercase: true,
  },
  fullName:{
    type: String,
    require : true,
    trim:true,
  },
  password:{
    type:String,
    required: true,
    
  },
  role:{
    type:String,
    enum:['user','moderator','admin'],
    default:'user'
  },
  profileImg:{
    type: String,
    default:''//Gona use cloudnary url
  },
  mobileNum:{
    type:Number,
    default: null,
  },  

},{timestamps:true})

export const User = mongoose.model("User",userSchema)