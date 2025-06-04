import express from "express";
import { addProduct,createCategory,getProductData,modifyProduct,removeProduct } from "../Controllers/product.controller.js" ;

const  router = express.Router();

router.post("/addproduct",addProduct)
router.post("/createCategory",createCategory)
router.post("/modifyProduct",modifyProduct)
router.delete("/removeProduct",removeProduct)
router.get("/getProductData",getProductData)


export default router;