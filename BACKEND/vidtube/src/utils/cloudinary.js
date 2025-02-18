import { v2 as cloudinary } from 'cloudinary';//The v2 version allows access to Cloudinary's modern API methods.
import fs from 'fs'; //file system module
import dotenv from 'dotenv'; //Loads environment variables from a .env file to keep sensitive information (API keys, secrets) secure.

dotenv.config( )//loads env vars from a env file

    // Configuration- used for authentication of cloudinary using credentials stired in env file
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    
const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if(!localFilePath)return null;

        const response =await cloudinary.uploader.upload(localFilePath,{
                resource_type: "auto", //auto means cloudinary will determine file type(img,vid,etc)
            });

        console.log("file uploaded on cloudinary, file src:"+ response.secure_url);

        //once the file is uploaded, we would like to delete it from our server   
        // Remove local file after successful upload
        fs.unlinkSync(localFilePath);

        return { //returns obj w this following
            url: response.secure_url,
            public_id: response.public_id //id assigned by cloudinary
        };
    
    } catch (error) {
        console.log("Upload error:",error);
        
        //Remove local file if upload fails
        fs.unlinkSync(localFilePath)
        return null;
    }
}

const deleteFromCloudinary = async (publicID)=>{ //accepts publicID
    try {
        const result= await cloudinary.uploader.destroy(publicID) //calls cloudinary uploader to destory the file
        console.log("Deleted from cloudinary",publicID);
        return result;
        
    } catch (error) {
        console.log("Error deleteing from cloudinary", error);
        return null;
    }
}

export {uploadOnCloudinary, deleteFromCloudinary};

