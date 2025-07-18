import dotenv from "dotenv";
import {app} from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:"./.env"
});

const PORT=process.env.PORT || 4001;

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    })
})
.catch((error)=>{
    console.log("MongoDB connection failed",error);
})





