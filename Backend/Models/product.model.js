import mongoose, { Types } from "mongoose";


const productSchema = new mongoose.Schema({
  item_name:{
    type: String,
    required:true,
    unique: true,
    trim:true
  },
  item_price:{
    type: Number,
    required:true,
    min: 0
  },
  description:{
    type: String,
    required: true,
  },
  isAvailable:{
    type: Boolean,
    required: true,
    default :true
  },
  itemImg1:{
    type:String, 
    // required:true,
    default:""
  },
  itemImg2:{
  type:String,
    default:"" 
  },
  itemImg3:{
    type:String,
    default:""
  },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Category",
    require:true
  },
}, {timestamps: true});

const Product =mongoose.model("Product",productSchema);
export default Product;