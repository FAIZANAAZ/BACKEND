import mongoose , { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new Schema({
  avatar: {
    type: {
      url:String
    },
    default: {
      url: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
    }
  },

  username:{
    type:String,
    required:true,
    lowercase:true,
    trim:true
  },
  fullname:{
    type:String,
    trim:true
  },
  email:{
    type:String,
    required:true,
    lowercase:true,
    trim:true,
    unique:true
  },
  password:{
    type:String,
    required:[true,'Password is required'],
  },
  isEmailVerified:{
    type:Boolean,
  default:false},

  refreshTokens:{
    type:String
  },
  forgotPasswordToken:{
    type:String
  },
  forgotPasswordTokenExpiryDate:{
    type:Date
  },
  emailVerificationToken:{
    type:String
  },
  emailVerificationTokenExpiryDate:{
    type:Date
  }
},{timestamps:true}
)


//***************************************** */
userSchema.pre("save",async function(next){

  if(!this.isModified("password")){
    return next()
  }else{
      await bcrypt.hash(this.password, 10)
  next()
  }
})


// hmary ye methods tb hi active hoty hen JB database me koi data hota he empty me nhi hoty
// pre ka mathoc ye kryga ye jesy hi data ayga save hony Sy phly ye Kam hoga Jo hmny pre me likha he to hmany ismy password hash krwaya he to save hony Sy phly password hash hoga phir save hoga data

// isModified 
// ismy ye he ke ye if condition tb chlygi JB passaward ko koi modified nhi kryga jesy agr put ki req hoi or password modified howa tb to new password chiye hoga to if ki condition false ho jaygi or new password bn kr store ho jayga or agr use ne name wagera modified Kiya or password nhi Kiya to password wahi rhyga to if true hoga or next pr chly jayga Bina dobara passaward bny ya hash howy
//************************************ */
userSchema.methods.isPasswordCorrect=async function(password){
  return await bcrypt.compare(password,this.password)
}

// janerate jwt access token 
userSchema.methods.generateAccessToken=function(){

  const payload={
    _id:this._id,
    email:this.email,
    username:this.username
  }
  return jwt.sign(payload,
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
}

// janerate jwt refresh token
userSchema.methods.generateRefreshToken=function(){

  const payload={
    _id:this._id
  }

  return jwt.sign(
    payload,
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn:process.env.REFRESH_TOKEN_EXPIRY})
}


// Token***
// token 2 trha ke hoty hen access token or refresh token
// access token***
// ye hm database me store nhi krwaty bs jwt me ye hota he wahi Sy compare krwa lety hen 

// refresh token**
// ye hm krwaty hen store database me or wahs Sy compare krwaty hen

//************************** */
const UserTable = mongoose.model('User',userSchema)
;
export  {UserTable};