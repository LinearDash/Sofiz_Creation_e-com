import dotenv from 'dotenv'
import express from 'express'
import connectMongoDB from './DB/connectMongoDB.js'


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

app.get('/', (req, res) => {
  res.send('Hello my World!')
})

app.get('/twitter',(req,res)=>{
  res.send('@san_De_s.Data test')
})


