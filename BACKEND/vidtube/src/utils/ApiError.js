class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack=""
    ){
        super(message);  // Calls the parent `Error` class constructor with the message
        this.statusCode = statusCode;  // HTTP status code (e.g., 400 for Bad Request)
        this.errors = errors;  // Optional array to store additional error details
        this.message = message;  // Custom error message
        this.data = null;  // Errors usually don’t have data, so it's set to `null`
        this.success = false;  // Error responses are always unsuccessful

        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export {ApiError}

