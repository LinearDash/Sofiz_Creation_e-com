import dotenv from 'dotenv'
import express from 'express'
import connectMongoDB from './DB/connectMongoDB.js'

import authRoutes from "./Routes/auth.routes.js"
import bodyParser from 'body-parser';


dotenv.config();
const app = express()
const port = process.env.PORT || 8000

connectMongoDB()
.then(()=>{
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  
  })
})
.catch((error)=>{
  console.log("Mongo DB connection error!!",error);
  

})

app.use(bodyParser.json({ limit: "10mb" })); // Change "10mb" to the desired size
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json({ limit: "10mb" }));

app.use("/api/auth",authRoutes)

