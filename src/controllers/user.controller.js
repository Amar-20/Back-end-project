import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async(req,res)=>{
    // res.status(200).json({
    //     message:'Code with Amar!'
    // })

    //1)get user details from frontend
    const {fullname,email,username,password}=req.body
    console.log(email)
    //2)validation
    //3)check if user is already exists:-username,email
    //4)check for images,check for avatar
    //5)//upload them to clouinary(utils), avatar
    //6)create user object - create entry in db
    //7)remove password and refresh token field from response.
    //8)check for user creation
    //return res.
})

export {registerUser}
