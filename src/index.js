// require('dotenv').config()

// import mongoose from "mongoose";
// import { DB_NAME } from "./constant";

// import { express } from "express";
// const app = express();

// (async ()=>{
//   try{
//     await mongoose.connect(`${process.env.MONGODB_URI}`/`${DB_NAME}`)

//     app.on('error', (error)=>{
//       console.log(error);
//       throw error
//     })

//     app.listen(process.env.PORT, ()=>{
//       console.log(`listening to port : ${process.env.PORT}`);
//     })
//   }catch(error){
//     console.log(error);
//   }
// })()


import dotenv from "dotenv"
import connectDb from "./db/index.js"

dotenv.config({
  path:'./env'
})

connectDb();