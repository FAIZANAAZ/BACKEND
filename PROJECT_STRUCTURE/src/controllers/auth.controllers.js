import {ApiResponse} from "../utils/api-response.js";
import { asyncHandler } from "../utils/async.handler.js";
import {ApiError} from "../utils/api-error.js";
import {UserTable} from "../models/user.model.js";
import {sendEmail,emailVerificationTemplate} from "../utils/mail.js";



// sign up controller
const registerUser=asyncHandler(async(req,res,next)=>{
  // get user data from request body from client
  const {email,username,password}=req.body;

  //1.check if user already exists
  const existingUser=await UserTable.findOne({
    $or:[{email},{username}]
  });
  // agar user mil jata he to error throw kr dy
  if(existingUser){
    return next(new ApiError(409,"User already exists with this email or username"));
  }

  //2. create user
  const user=await UserTable.create({
    email,
    username,
    password,
    isEmailVerified:false
  });

  // sign up krty ak token bhi sath data base me savee kro taky email verify kr sky token ke sath
  // create temporary token for email verification

  // ye wo function he jo hmny schema me bnaya he model me
  const {unHashedToken,hashedToken,tokenEntry}=await user.generateAccessToken();
  user.emailVerificationToken=hashedToken;
  user.emailVerificationTokenExpiryDate=tokenEntry
  await user.save(
    {validateBeforeSave:false}
  );

  //3. send verification email to user
  // ye wo function he jo hmny mail.js me bnaya he isy hm user ko emails send krty hen 
  await sendEmail({
    email:user.email,
    subject:"Email Verification - Project Management App",
    mailgenContent:emailVerificationTemplate(
      user.username,
      `${req.protocol}://${req.get("host")}/api/v1/auth/verify-email/${unHashedToken}`
    )
  
})

//excluding field from database response
const createUser=await UserTable.findById(user._id).select("-password -refreshTokens  -emailVerificationToken -emailVerificationTokenExpiryDate");

// if user creation failed
if(!createUser){
  return next(new ApiError(500,"User registration failed, please try again later"));}

  return res.status(201).json(
    new ApiResponse(200,{user:createUser},"user register successfully"))
})

//******************* login controller */

const login=asyncHandler(async(req,res,next)=>{
  // get user data from request body from client
  const{email,password,username}=req.body;

  //1.check if user exists
  const existingUser=await UserTable.findOne({email});

  // agar user nhi milta to error throw kr dy
  if(!existingUser){
    throw new ApiError(404,"User not found with this email");
  }

  //2. check if password is correct
  const isPasswordCorrect=await existingUser.isPasswordCorrect(password);
  if(!isPasswordCorrect){
    throw new ApiError(401,"Password is incorrect");
  }

  //generate access token and refresh token
  const accessToken=await existingUser.generateAccessToken();
  const refreshToken=await existingUser.generateRefreshToken();

  //seting cookies options
  const options={
    httpOnly:true,
    secure:true
  }

  //return response to client with user details and tokens
  return res.status(200)
  .cookie("refreshToken",refreshToken,options)
  .cookie("accessToken",accessToken,options)
  .json(
    new ApiResponse(
      200,{
    user:{
      _id:existingUser._id,
      email:existingUser.email
    },
    accessToken,
    refreshToken
  },
  "User logged in successfully"));

})



  

export {registerUser,login};