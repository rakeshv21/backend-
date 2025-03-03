required('dotenv').config({path : './env'})

import mongoose from " mongoose";
import{DB_NAME} from "../constants.js";
import connectDB from "./db/index.js";
 

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(` server is running at port ${process.env.PORT}`);
    })
})

/*
 import express from "express"
const app = express();
// function connectDb (){

// }

// connectDb();
// this way is good but it can be more efffective by using iife
//semicolon in next is nothing it just making the code clean
;( async() =>{
   try{
        await mongoose.coonect(`${process.env.MONGOOSE_URL}/${DB_NAME}`)
        app.on("error" , (error)=>{
        console.log("app is not able to listen" , error);
        throw error;}
        )

        app.listen(process.env.port, ()=>
            {
              console.log(`app is listening ${process.env.PORT}`)
            })
   }
   catch(error){
    console.error( "ERROR" , error)
    throw err
   }
})()*/