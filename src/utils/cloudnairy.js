import {v2 as cloudinary} from "cloudinary";
import fs from "fs";


cloudinary.config({
    cloud_name: PROCESS.ENV.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
}); 

const uploadOnCloud = async (localFilePath) =>{
    try {

        if(!localFilePath) return ;

        //upload the file on cloudinary
    const  response = await  cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been uploaded successfully
        console.log("file is uploaded" , response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); //it will remove the locally saved file as a upload operation fail
        return null;
    }

}

export {uploadOnCloudcloudinary}