import dotenv from 'dotenv'
import express from 'express'
import connectMongoDB from './DB/connectMongoDB.js'


dotenv.config();
const app = express()
const port = process.env.PORT

connectMongoDB()
app.get('/', (req, res) => {
  res.send('Hello my World!')
})

app.get('/twitter',(req,res)=>{
  res.send('@san_De_s.Data test')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})
