import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import cors from 'cors'
import productRouter from './src/routers/Product1Router.js'
const app = express()

app.use(express.json())
app.use(cors())
app.use(productRouter)
mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log('connecting server...')
})
.catch(()=>{
    console.log('error in connecting...')
})

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`server is listning on port ${process.env.SERVER_PORT}`)
})