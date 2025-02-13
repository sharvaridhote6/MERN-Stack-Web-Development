//purpose of this file is to have a database connection 
// there's always a chance of an error, so use try catch block and db is always in another continent so use async-await
import mongoose from 'mongoose'; //mongoose is used to connect to the databse 
import {DB_NAME} from '../constants.js'; 

const connectDB= async ()=>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connection successful, DB host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection failed",error);
        process.exit(1); //0 indicates success, 1 indicates failure 
    }
}

export default connectDB