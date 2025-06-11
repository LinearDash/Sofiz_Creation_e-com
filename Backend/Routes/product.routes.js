import express from "express";
import { addProduct,getProductData,modifyProduct,removeProduct } from "../Controllers/product.controller.js" ;
import { createCategory, getCategory } from "../Controllers/category.controller.js"
// import{Log}from "../Middleware/consoleLog.js"

const  router = express.Router();

router.post("/addproduct",addProduct)
router.post("/modifyProduct/:id",modifyProduct)
router.delete("/:id",removeProduct)
router.get("/getProductData",getProductData)

router.post("/createCategory",createCategory)
router.get("/getCategory",getCategory);


export default router;