import Order from "../Models/order.model.js";

export const createOrder = async()=>{
try {
  const {products, deliveryAddress, paymentmethod, notes}= req.body;
  if(!userId){
    throw new Error
  }
} catch (error) {
  console.error("Error creating order:", error.message);
  res.status(500).json({ message: "Failed to create order", error: error.message });
}
}

export const updateOrder = ()=>{

}