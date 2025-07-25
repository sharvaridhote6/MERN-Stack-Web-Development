import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

//functionality for contoller healthcheck
const healthCheck = asyncHandler(async(req,res)=>{
    return res
    .status(200)
    .json(new ApiResponse(200,"OK","Healthcheck is working fine"))
})

export {healthCheck}