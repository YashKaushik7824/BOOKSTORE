import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bookRoute from './route/book.route.js'
import cors from 'cors'
import userRoute from './route/user.route.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 4000
const URI = process.env.MONGODBURI;
// connect to mongo db
try{
  mongoose.connect(URI);
  console.log("Connected to mongodb")
}catch(err){
  console.log(err)
}

// Defining routes

app.use("/book",bookRoute);
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})