import express from "express"
import { login, signup, logout, getMe } from "../Controllers/auth.controller.js"
import protectRoute from "../Middleware/protectRoute.middleware.js"

const router = express.Router();

router.get("/getme", protectRoute, getMe)

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

export default router;