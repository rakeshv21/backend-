const asynhandler = (requestHandler)=>{
     (req,res,next)=>{
        Promise.resolve( requestHandler (req,res,next)).catch( (err)=>next(err))
     } 
}

export {asynhandler}

//asynchandler is a higher order function
// const asynhandler = (fn) => async ( req ,res,next) => {
//     try {
//          await fn(req,res,next)
//     } catch (error) {
//             res.status(error.code || 500).json({
//                 success: false,
//                 message:err.message
//             })
//     }
// }