// id string pk
// username string
// email string
// fullName string
// avatar string
// coverImage string
// watchHistory ObjectId[] videos
// password string
// refreshToken string
// createdAt date
// updatedAt date
// the id, uniqueness is automatically handled by mongodb, so we don't need to specify it in the schema, either we can create our own id or let mongo create it for us

import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
        fullname:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            index: true
        },
        avatar:{
            type:String,
            required:true, //cloudinary URl
        },
        coverImage:{
            type:String,
        },
        watchHistory:[
            {
            type:Schema.Types.ObjectId,
            ref:'Video'
            }
        ],
        password:{
            type:String,
            required:[true,"Password is required"],
        },
        refreshToken:{
            type:String,
        },  
    },
    { timestamps:true,} //for createdAT and updatedAt
)

//encrypt pass, never use arrow functions 
userSchema.pre("save",async function(next){

    if(!this.modified("password"))return next() //if the field being modified is not password, then return next, bec we want to encrypt the pass only when it is specifically modified, or saved for the first time
    this.password=bcrypt.hash(this.password,10) //10 is a no of algorithmic rounds, more rounds, more secure, but slower
    next()
})

//this will take the users password and compare it with the hashed password in the db
userSchema.methods.isPasswordCorrect =async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken= function (){
    //short lived access token, exp time depends on the use case
    jwt.sign({
        _id:this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname,
    }, 
    process.env.ACCESS_TOKEN_SECRET, 
    {expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
}

userSchema.methods.generateRefreshToken= function (){
    //short lived access token, exp time depends on the use case
    jwt.sign({
        _id:this._id,

    }, 
    process.env.REFRESH_TOKEN_SECRET, 
    {expiresIn:process.env.REFRESH_TOKEN_EXPIRY})
}

export const User= mongoose.model('User', userSchema);
//in mongodb, mongoose creates a structure, its builds a new model, a doc/structure in the db,and that will be called user, and we'll refer to the userSchema created

