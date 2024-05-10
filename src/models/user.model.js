// adding user and video model, jwt, bcrypt and user_def methods.


import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

const user_schema = new Schema(
    {
     username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        index:true,
        lowercase:true
     },
     watchHistry:{
        type:[
            {
              type:Schema.Types.ObjectId,
              ref:'video**'  
            }
        ]
     },
     email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
     },
     fullName:{
        type:String,
        required:true,
        trim:true,
        index:true,
     },
     password:{
        type:String,
        required:[true,'password is incorrect']
     },
     refreshToken:{
        type:String,
     },
     avatar:{
        type: String,
        required:true
     },
     coverImage:{
        type:String,
        required:true,
     },
     
    },{timestamps:true})



    user_schema.pre("save",async function(next){

        if(!this.isModified('password')) return next()

        this.password=bcrypt.hash(this.password,10)
        next()
    })
    user_schema.methods.isPasswordCorrect = async function(password){
        return await bcrypt.compare(password,this.password)
    }
    user_schema.methods.generateAccessToken = function(){
       return jwt.sign(
            {
              _id:this._id,
              email:this.email,
              username:this.username,
              fullName:this.fullName
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn:process.env.ACCESS_TOKEN_EXPIRY
            }

        )
    }
    user_schema.methods.generateRefreshToken = function(){
        return jwt.sign(
            {
              _id:this._id,
              
            },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn:process.env.REFRESH_TOKEN_EXPIRY
            }

        )
    }
export const User = mongoose.model('User',user_schema)