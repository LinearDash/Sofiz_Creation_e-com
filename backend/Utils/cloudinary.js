import {v2 as cloudinary} from "cloudinary"
import dotenv from "dotenv"
import fs from "fs"

dotenv.config()

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (filePath)=>{
  try {
    if(!filePath) return null;
    const response = await cloudinary.uploader.upload(filePath,{
      resource_type:"auto"
    })
    console.log(`File uploaded successfully: ${response.secure_url}`);

    if(fs.existsSync(filePath)){
      fs.unlinkSync (filePath);
      console.log(`local file deleted :${filePath}`);
    }
    return response;
  } catch (error) {
    console.error("Cloudinary upload error:", error)
    fs.unlinkSync(filePath)
    return null;
  }
}
const destroyFromCloudinary = async (imageUrl)=>{
  try {
    const publicId= imageUrl.split("/").pop().split(".")[0];
    await cloudinary.uploader.destroy(publicId);

    console.log(`Image "${publicId}" deleted from Cloudinary`);
    
  } catch (error) {
    console.error("Error while deleting image from Cloudinary:", error);
  }
}

export {uploadOnCloudinary,destroyFromCloudinary};
