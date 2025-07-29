import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderId:{
    type: String,
    unique: true,
    required: true,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required: true,
  },
  products:[{
    product:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"Product",
      required:true,
    },
    quantity:{
      type:Number,
      default:1,
      min:1,
    },

  }],
  totalAmount:{
    type:Number,
    required:true,
    min:0,
  },
  orderStatus:{
    type: String,
    enum: ['ordered', 'delivering', 'delivered', 'unsuccessful'],
    default: 'ordered',
  },
  paymentStatus:{
    type: String,
    enum: ['unpaid', 'paid', 'unsuccessful'],
    default: 'unpaid',
  },
  paymentMethod:{
    type: String,
    enum: ['cash', 'esewa', 'khalti'],
    default: 'cash',
  },
  deliveryAddress:{
    type: String,
    required: true,
  },
  notes:{
    type: String,
    default: ''
  }
},{timestamps: true})

const Order = mongoose.model("Order", orderSchema);
export default Order;