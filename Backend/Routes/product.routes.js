import express from "express";
import { addProduct, getProductData, modifyProduct, removeProduct } from "../Controllers/product.controller.js";
import { createCategory, getAllCategories, getCategoryData } from "../Controllers/category.controller.js"
import { uploadProductImages } from "../Middleware/multer.middleware.js";
import protectRoute from "../Middleware/protectRoute.middleware.js";
// import{Log}from "../Middleware/consoleLog.js"

const router = express.Router();

router.post("/addproduct", protectRoute, uploadProductImages, addProduct)
router.put("/modifyProduct/:id", protectRoute, modifyProduct)
router.delete("/:id", protectRoute, removeProduct)
router.get("/getProductData/:id", getProductData)

router.post("/createCategory", protectRoute, createCategory)
router.get("/getCategoryData", getCategoryData);
router.get("/getAllCategories", getAllCategories)


export default router;