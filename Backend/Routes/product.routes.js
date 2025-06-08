import express from "express";
import { addProduct,createCategory,getProductData,modifyProduct,removeProduct } from "../Controllers/product.controller.js" ;
import{Log}from "../Middleware/consoleLog.js"
const  router = express.Router();

router.post("/addproduct",Log,addProduct)
router.post("/createCategory",Log,createCategory)
router.post("/modifyProduct",modifyProduct)
router.delete("/:id",removeProduct)
router.get("/getProductData",getProductData)


export default router;