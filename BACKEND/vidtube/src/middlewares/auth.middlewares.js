import jwt from "jsonwebtoken"
import {User} from "../models/user.models.js"
import {ApiError} from "../utils/ApiError.js"
import {asyncHandler} from "../utils/asyncHandler.js"

export const verifyJWT = asyncHandler(async(req,_,next)=>{
    //extract the token
    const token= req.cookies.accessToken || req.header
    ("Authorization").replace("Bearer " ,"")
    if(!token){
        throw new ApiError(401,"Unauthorized")
    }
    try {
        const decodedToken= jwt.verify(token,process.env.ACCESS_TOKEN_SECRET) //chceks if the token is valid and not expired, decodes it using the access token sec and extracts the user details
        const user= await User.findById(decodedToken?._id).select("-password -refreshToken") //finds the user based on the decoded id
        if(!user){
            throw new ApiError(401,"Unauthorized")
        }

        req.user= user
        next() //used to transfer the middleware to the controller [pass to the next]

    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
})
