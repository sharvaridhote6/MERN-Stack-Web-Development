import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config( )

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    
const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if(!localFilePath)return null
        const response =await cloudinary.uploader.upload(
            localFilePath,{
                resource_type: "auto",
            }
        )
        console.log("file uploaded on cloudinary, file src:"+ response.url);
        //once the file is uploaded, we would like to delete it from our server 
    } catch (error) {
        fs.unlink(localFilePath)
        return response
    }
}

export {uploadOnCloudinary}

