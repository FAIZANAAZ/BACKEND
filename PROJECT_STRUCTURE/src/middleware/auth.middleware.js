import jwt from "jsonwebtoken";
import {UserTable} from "../models/user.model.js";
import {ApiError} from "../utils/api-error.js";
import {asyncHandler} from "../utils/async.handler.js";

export const verifyJWT=async(req,res,next)=>{
  // get token from cookies
  const token =req.cookies?.access_token
  // if token not found
  if(!token){
    return next(new ApiError(401,"Access token is missing"));
  }

  try{
    //verify token
    const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);

    const user=await UserTable.findById(decoded._id).select("-password -refreshTokens -emailVerificationToken -emailVerificationTokenExpiryDate");

    // if user not found
    if(!user){
      return next(new ApiError(401,"User not found"));
    }

    // attach user to request object
    req.user=user;
  
  }catch(error){
    return next(new ApiError(401,"Invalid access token"));
  }
}