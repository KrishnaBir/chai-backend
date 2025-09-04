 import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

 const connectDb = async ()=>{
  try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log('conectioninstance object : ' + connectionInstance);
    console.log(`\n DB host: ${connectionInstance.connection.host}`);

  }
  catch(error){
    console.log("error happened-------\n",error);
    process.exit(1)
  }
 }

 export default connectDb