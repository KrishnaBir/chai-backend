// require("dotenv").config({path: "./env"});
import dotenv from "dotenv";
import connectDB from "./db/index.js";

import express from "express";

dotenv.config({ path: "./env" });

const app = express();

connectDB();

// function connectDB() {}
// connectDB



// ;(async ()=>{
//   try{
//     await mongoose.connect(`${process.env.MongoDB_URI}/${DB_Name}`)
//     app.on("error", (error) => {
//       console.error("ERRRR:", error);
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`app is listening on port ${process.env.PORT}`);
//     });
//   }catch(err){
//     console.error("Error:", err);
//   }
// })()
