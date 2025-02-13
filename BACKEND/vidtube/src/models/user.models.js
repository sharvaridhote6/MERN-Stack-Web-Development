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

import mongoose, {Schema} from 'mongoose';
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
            lowercase:true,
            trim:true,
            index: true
        }
    }
)
export const User= mongoose.model('User', userSchema);
