import { asyncHandler } from "../utils/asyncHandler.js"; //A middleware that wraps the async function in a try catch block to handle errors properly.
import {ApiError} from '../utils/ApiError.js'; //A custom error-handling class.
import {User} from '../models/user.models.js' //A Mongoose model representing the users collection in the database.
import {uploadOnCloudinary, deleteFromCloudinary} from '../utils/cloudinary.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import jwt from 'jsonwebtoken';

//below 2 are helper functions,meaning they help another function to perform a task, and last one is a route,
//we take the data from the user, validate it with the db and then update or apply whatver needs to be done

//this fetches user by userID, if it exists, it generates acc and ref tokens, and saves ref tokens in the db
const generateAccessAndRefreshToken= async (userId)=>{
    try {
        const user= await User.findById(userID)
        if(!user){
            throw new ApiError(404,"User not found") //err specific to user not found
        }
        const accessToken= user.generateAccessToken() //used for authentication, short lived token
        const refreshToken= user.generateRefreshToken() //used to request a new access token, long-lived
    
        user.refreshToken= refreshToken
        await user.save({validateBeforeSave:false}) //saves refresh tokens in the database 
        return{accessToken, refreshToken}
    } catch (error) {
        throw new ApiError(500,"Something went wrong while generating access and refresh tokens ")//err specific to this
    }
}

//saves user data and uploads profile images
const registerUser= asyncHandler(async(req,res)=>{ // automatically catch errors without using try-catch blocks.
    const{fullname, email,username, password}=req.body //extracts all this info from the request body

    //validation
    if(
        [fullname,username, email, password].some((field)=>field?.trim()=== "") //checks if there are any whitespaces or empty ones
    ){
        throw new ApiError(400,"All fields required")//if any field is empty, this error is thrown
    }

    //checking if the user already exists
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

    let avatar;
    try {
        avatar= await uploadOnCloudinary(avatarLocalPath)
        console.log("Uploaded avatar", avatar)
    } catch (error) {
        console.log('Error uploading avatar', error);
        throw new ApiError(500, "Failed to upload avatar")
        
    }
    let coverImage;
    try {
        coverImage =await uploadOnCloudinary(coverLocalPath)
        console.log("Uploaded coverImage", coverImage)
    } catch (error) {
        console.log('Error uploading coverImage', error);
        throw new ApiError(500, "Failed to upload coverImage")
        
    }

    try {
        const user =await User.create({
            fullname,
            avatar: avatar.url || "",
            coverImage: coverImage?.url || "",
            email,
            password,
            username: username.toLowerCase()
        })
    
        const createdUser= await User.findById(user._id).select( "-password -refreshToken")
    
        if(!createdUser){
            throw new ApiError(500,"Something went wrong")
        }
        return res
        .status(201)
        .json(new ApiResponse(200,createdUser, "User registered successfully."))
    } catch (error) {
        console.log("User creation failed");
        if (avatar) {
            await deleteFromCloudinary(avatar.public_id)
        }
        if (coverImage) {
            await deleteFromCloudinary(coverImage.public_id)
        }
        throw new ApiError(500,"Something went wrong, images are deleted")
    }
})

//logging a user in
const loginUser= asyncHandler(async(req,res)=>{
    //get data from body
    const{email,username,password}=req.body
    //validation
    if(!email){
        throw new ApiError(400, "Email is required.")
    }

    const user= await User.findOne({ 
        $or:[{username},{email}] 
    })
    if(!user){
        throw new ApiError(404,"User not found.")
    }

    //validate pass
    const isPasswordCorrect =await user.isPasswordCorrect(password)
    if(!isPasswordCorrect){
        throw new ApiError(404,"Invalid password.")
    }

    const{accessToken,refreshToken}=await generateAccessAndRefreshToken(user._id)

    const loggedInUser= await User.findById(user._id)
    .select("-password -refreshToken");
    if(!loggedInUser){
        throw new ApiError(500,"User not logged in.")
    }

    const options={
        httpOnly:true, //makes the cookies non-modifiable from the client side, only server can do that
        secure: process.env.NODE_ENV==="production", //if the env is in production grade then secure will be true, else for testing it'll be false
    }
    return res
    .status(200)
    .cookie("accessToken",accessToken, options)//a small text file that a website sends to your browser to identify you and remember your preferences
    .cookie("refreshToken",refreshToken, options)//a small text file that a website sends to your browser to identify you and remember your preferences
    .json(new ApiResponse(200, loggedInUser,"User logged in"))

})

//logout
const logoutUser=asyncHandler(async(req,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
                refreshToken: undefined,
            }
        },
        {new:true}
    )
    const options={
        httpOnly:true,
        secure: process.env.NODE_ENV =="production",
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, loggedInUser,"User logged in"))
})

//generating a refresh token
const refreshAccessToken= asyncHandler(async(req,res)=>{
    const incomingRefreshToken= req.cookies.refreshToken // cookies for web || req,body.refreshToken for the mobile app
    if(!incomingRefreshToken){
        throw new ApiError(401, "Refresh token required.")
    }

    try {
        const decodedToken =jwt.verify( //checks if the token is valid and not expired
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET //decodes the token using this
        )
        const user= await User.findById(decodedToken?._id)
        if(!user){
            throw new ApiError(401,"Invalid refresh token.")
        }

        if(incomingRefreshToken !== user?.refreshToken){
            throw new ApiError(401,"Invalid refresh token")
        }

        const options={
            httpOnly:true,
            secure: process.env.NODE_ENV =="production",
        }

       const {accessToken, refreshToken: newRefreshToken}= await generateAccessAndRefreshToken(user._id)
        return res
        .status(200)
        .cookie("accessToken",accessToken, options)
        .cookie("refreshToken",newRefreshToken , options)
        .json(
            new ApiResponse(
                200, 
                {accessToken,
                    refreshToken: newRefreshToken
                },
                "Access token refreshed successfully"
            ))
    } catch (error) {
        throw new ApiError(500, "Something went wrong while refreshing access token")
    }

})

const changeCurrentPassword= asyncHandler(async(req,res)=>{
    const {oldPassword,newPassword} = req.body //both passwords are requested from the body
    const user= await User.findById(req.user?._id) //fetches the user from the db using id, then sent to verifyJWT middleware, ?. is optional chaning which ensures that if re.user is null or undefined, iy wont cause an issue
    const isPasswordCorrect= await user.isPasswordCorrect(oldPassword) //checks if the old passwprd entered by the user is correct

    if(!isPasswordValid){
        throw new ApiError(401,"Old password is incorrect")
    }
    user.password=newPassword; 
    await user.save({validateBeforeSave:false})
    return res.status(200).json(new ApiResponse(200,{},
        "Password changed successfully"))
})

const getCurrentUser = asyncHandler(async(req,res)=>{
    return res. status(200).json(new ApiResponse(200,req.user, "Current user details"))
})

const updateAccountDetails = asyncHandler(async(req,res)=>{
    const {fullname,email,username}= req.body
    if(!email){
        throw new ApiError(400,"Email is required")
    }
    if(!username){
        throw new ApiError(400,"Username is required")
    }
    const user= await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                fullname,
                email:email,
            }
        },
        {new:true}
    ).select(" -password -refreshToken")

    return res.status(200).json(new ApiResponse(200,user,"Account details updated successfully"))
})

const updateUserAvatar = asyncHandler(async(req,res)=>{
    const avatarLocalPath= req.files?.path //extracts the local file path of the avatar

    if(!avatarLocalPath){
        throw new ApiError(400,"File is required") //checking if the file is uploaded
    }
    const avatar= await uploadOnCloudinary(avatarLocalPath) //uploads the file to cloudinary
    if(!avatar.url){ 
        throw new ApiError(500,"Something went wrong while uploading avatar")//checking if the file is uploaded
    }
    const user= await User.findByIdAndUpdate( //updates the avatar in the db
        req.user?._id, //finds the user
        {
            $set:{ //this operator modifies only the avatar filed, without that all the avatar urls will get changed
                avatar:avatar.url 
            }
        },
        {new:true}
    ).select(" -password -refreshToken")

    res.status(200).json(new ApiResponse(200,user,"Avatar updated successfully"))
})

const updateUserCoverImage = asyncHandler(async(req,res)=>{
        const coverImageLocalPath= req.files?.path
        if(!coverImageLocalPath){
            throw new ApiError(400,"File is required")
        }
        const coverImage = await uploadOnCloudinary(coverImageLocalPath)
        if(!coverImage.url){
            throw new ApiError(500,"Something went wrong while uploading coverImage")
        }
        const user= await User.findByIdAndUpdate(
            req.user?._id,
            {
                $set:{
                    coverImage:coverImage.url
                }
            },
            {new:true} //ensures we get the updates user doc replacing the old one
        ).select (" -password -refreshToken") //deletes them from showing in the response

        res.status(200).json(new ApiResponse(200,user,"Cover image updated successfully"))
    })

export {
    registerUser, 
    loginUser, 
    refreshAccessToken, 
    logoutUser, 
    changeCurrentPassword, 
    getCurrentUser, 
    updateAccountDetails, 
    updateUserAvatar, 
    updateUserCoverImage
}

