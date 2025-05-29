import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique:true
  },
  email:{
    type: String,
    required:true,
    unique: true,
    lowercase: true,
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
    default:''
  },
  mobileNum:{
    type:Number,
    default: null,
  }
  

},{timestamps:true})

export const User = mongoose.model("User",userSchema)