import express from "express";
import { addProduct,createCategory,getProductData,modifyProduct,removeProduct } from "../Controllers/product.controller.js" ;
// import{Log}from "../Middleware/consoleLog.js"
const  router = express.Router();

router.post("/addproduct",addProduct)
router.post("/createCategory",createCategory)
router.post("/modifyProduct/:id",modifyProduct)
router.delete("/:id",removeProduct)
router.get("/getProductData",getProductData)


export default router;