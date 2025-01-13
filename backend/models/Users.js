import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        
        userName:String,

        lastName:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

const userModel = mongoose.Model("users", userSchema, "users");
export default userModel;