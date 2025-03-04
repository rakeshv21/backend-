import {asynhandler} from "../utils/asynhandler.js";
import {ApiError} from "../utils/apierror.js";
import {user} from "../models/user.model.js";
import {uploadOnCloud} from "../utils/cloudnairy.js";


const registeruser = asynhandler( async(req , res)=>{
   //get user detailed from frotenend
   //validation -not empty
   //check if user already exists -by username or email
   //check for images ,check for avatar
   //upload them to cloudnairy
   //create user object -create entry in db
   //remove password and fresh token field fro response
   //check for user creation
   //return response
   
   //how to get user detailes=>
     
   const {fullname,email,userrname,password} = req.body
   // console.log("email:" ,email);

    if(
        [fullname,email,username,password].some((field)=>
        field?.trim() === "") ){
              throw new ApiErrorss(400 )
    }
 
    //checking existence of the user 
   const existinguser user.findOne({
        $or: [{ email },{ username }]
})

   if(existinguser){
    throw new ApiErrorss(409 , "user is already in db")
   }

   //now we are handling images 

  const avatarLocalPath = req.files?.avatar[0]?.path
  const coverimageLocalPath = req.files?.coverImage[0].path;

  if(!avatarLocalPath){
    throw new ApiErrorss(400,"avatar file is required")
  }

  uploadOnCloud 
})

export {registeruser}