import { asyncHandler } from "../utils/asyncHandler.js"; //A middleware that wraps the async function to handle errors properly.
import {ApiError} from '../utils/ApiError.js'; //A custom error-handling class.
import {User} from '../models/user.models.js' //A Mongoose model representing the users collection in the database.
import {uploadOnCloudinary} from '../utils/cloudinary.js'
import {ApiResponse} from '../utils/ApiResponse.js'

const registerUser= asyncHandler(async(req,res)=>{ // automatically catch errors without using try-catch blocks.
    const{fullname, email,username, password}=req.body //extracts all this info from the request body

    //validation
    if(
        [fullname,username, email, password].some((field)=>field?.trim()=== "") //checks if there are any whitespaces or empty ones
    ){
        throw new ApiError(400,"All fields required")//if any field is empty, this error is thrown
    }

    const existedUser= await User.findOne({ //searches for user collection 
        $or:[{username},{email}] //or checks both fields
    })
    if(existedUser){
        throw new ApiError(409,"User with email or username already exists")
    }
    //extracts files for avatar, coverImage from req.files whicha re uploaded using multer
    console.warn(req.files)
    const avatarLocalPath=  req.files?.avatar?.[0]?.path
    const coverLocalPath=  req.files?.coverImage?.[0]?.path //Uses optional chaining (?.) to avoid errors if the files don't exist.

    if(!avatarLocalPath){
        throw new ApiError(409,"Avatar file is missing")
    }

    // const avatar= await uploadOnCloudinary(avatarLocalPath)//await makes the code wait until the file is uploaded and a response is received before moving to the next line, w/o that the function would start executing before uploads are complete
    // const coverImage = await uploadOnCloudinary(coverImage)

    try {
        avatar= await uploadOnCloudinary(avatarLocalPath)
        console.log("Uploaded avatar", avatar)
    } catch (error) {
        console.log('Error uploading avatar', error);
        throw new ApiError(500, "FAiled to upload avatar")
        
    }

    try {
        let coverImage =await uploadOnCloudinary(avatarLocalPath)
        console.log("Uploaded coverImage", avatar)
    } catch (error) {
        console.log('Error uploading coverImage', error);
        throw new ApiError(500, "FAiled to upload coverImage")
        
    }

    const user =await User.create({
        fullname,
        avatar: avatar.url, 
        coverImage: coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    })

    const createdUser= await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500,"Something went wrong")
    }
    return res
    .status(201)
    .json(new ApiResponse(200,createdUser, "User registered successfully."))
})

export {
    registerUser,
    
}