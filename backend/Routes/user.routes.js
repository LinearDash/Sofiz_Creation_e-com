import express from "express";
import {isAdmin} from "../Controllers/user.controller.js"
 
const router = express.Router();

router.get("/isAdmin",isAdmin)

export default router;