// A helper function that wraps asynchronous route handlers to catch and pass errors automatically to Express's error-handling middleware.
// Helps avoid writing try-catch blocks manually in each async function.
//used specifically for express route handling, not any other utiliy or helper functions

const asyncHandler =(requestHandler)=>{
    return (req,res, next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch
        ((err)=>next(err));
    }
}

export {asyncHandler}