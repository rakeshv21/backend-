import mongoose,{schema} from "mongoose";
import mongooseAggregatepaginate from "mongoose-aggregate-paginate-v2";
const videoschema = new schema ({
 videoFile:{
    type:String,
    required:true
 },
 thumbnail:{
    type:String,
    required:true
 },
 title:{
    type:String,
    required:true
 },
 description:{
    type:String,
    requird:true
 },

 duration:{
    type:Number,
    required:true //ye cloud nery se aata hai
 },
 views:{
    type:Number,
    default:0
 },
 isPublished:{
   type:Boolean,
   default:true
 },
 owner:{
    type:Schema.Types.ObectId,
    ref:"user"
 }
},
{timestamps : true}
)

videoschema.plugin(mongooseAggregatepaginate)
export const video = mongoose.model("video" , videoschema)