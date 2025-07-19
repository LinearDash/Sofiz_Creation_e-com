import dotenv from "dotenv";
import express from "express";
import connectMongoDB from "./DB/connectMongoDB.js";
import authRoutes from "./Routes/auth.routes.js";
import productRoutes from "./Routes/product.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

connectMongoDB()
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.use(cors({}));
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
