import express from "express";
import { addProduct,getProductData,modifyProduct,removeProduct } from "../Controllers/product.controller.js" ;
import { createCategory, getAllCategories, getCategoryData } from "../Controllers/category.controller.js"
// import{Log}from "../Middleware/consoleLog.js"

const  router = express.Router();

router.post("/addproduct",addProduct)
router.post("/modifyProduct/:id",modifyProduct)
router.delete("/:id",removeProduct)
router.get("/getProductData/:id",getProductData)

router.post("/createCategory",createCategory)
router.get("/getCategoryData",getCategoryData);
router.get("/getAllCategories",getAllCategories)


export default router;