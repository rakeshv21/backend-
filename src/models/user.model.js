import mongoose ,{schema} from"mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
const userschema = new schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim:true,
        index:true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim:true,
    
    },

    fullname:{
    
            type: String,
            required: true,
            trim:true,
            index:true
        },

        avatar:{
            type: String,
            required: true,

        },
        coverImage:{
            type:String,
        },

        watchHistory:[{
            type: Schema.Types.ObjectId,
            ref:"video"

        }],

        password:{
            type:String,
            required:[true,"password is required"]
        },

        refreshToken:{
            type:string
        }
    
},
{
    timestamps:true
}
)

userschema.pre("save" , async function (next) {
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password , 8)
    next()
})

userschema.methods.ispasswordCorrect = async function(password){
    return await bcrypt.compare(password ,this.password)
}

userschema.methods.generateAccessToken = function(){
   return jwt.sign({
        _id:this.id,
        email:this.email,
        username:this.username,
        fullname: this.fullname
    },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
      }
)
}
userschema.methods.generaterefreshToken = function(){
    return jwt.sign({
        _id:this.id,
        email:this.email,
        username:this.username,
        fullname: this.fullname
    },
      process.env.refresh_token_scret,
      {
        expiresIn:process.env.refresh_token_expiry
      }
)
}
export const user = mongoose.model("user" ,userschema)