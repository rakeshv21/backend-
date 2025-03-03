import {asynhandler} from "../utils/asynhandler.js"

const registeruser = asynhandler( async(req , res)=>{
    res.status(200).json({
        message:"ok"
    })
})

export {registeruser}