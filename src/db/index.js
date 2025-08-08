import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
  try{
    const connectionInstance = await mongoose.connect(`${process.env.MongoDB_URI}/${DB_Name}` )
    console.log(`\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
  }catch(error) {
    console.error("Database connection failed:", error);
    process.exit(1)
  }
}

export default connectDB;