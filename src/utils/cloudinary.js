import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_cloud_name,
    api_key: process.env.CLOUDINARY_api_key, 
    api_secret: process.env.CLOUDINARY_api_secret
});

const uploadOnCloudinary =async (localFilePath)=>{
    try {
        if(!localFilePath) return null // or path not found!!
        //upload the file on cloudinary 
       const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been uploaded
        console.log('file is uploded in cloudinary',response.url)
        return response.url
    } catch (error) {
        fs.unlinkSync(localFilePath) //this removes the locally saved temp file as the upload operation got failed.
        return null;

    }
}

export default uploadOnCloudinary;