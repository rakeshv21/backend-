import {asynhandler} from "../utils/asynhandler.js";
import {ApiErrorss} from "../utils/apierror.js"

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
     const {fullname , email,username,password} = req.body
    console.log("email:" ,email);

})

export { registeruser}