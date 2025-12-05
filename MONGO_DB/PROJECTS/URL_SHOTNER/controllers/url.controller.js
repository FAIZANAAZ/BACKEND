const { nanoid } = require("nanoid");
const { findUserByEmail } = require("../service/userTable.services");
const { CreateUrlData } = require("../service/urltable.services");







exports.shortenUrlFunction=async(req,res)=>{
  const {longUrl}=req.body;

  if(!longUrl){
    return res.status(400).json({error:"url is required"});
  
  }
// generate short id (endpoint) of 8 characters
  const shortId=nanoid(8);

  // req.jwtpayload=userPlayload->userid
const email=  req.jwtpayload.email
// kioky hm email body me nhi bhejry to jwt me bhi save hoti he wha sy nikal rhy hen 
  console.log("✅✅🤖❤",email);
  const user= await findUserByEmail(email);

  

  const userData=await CreateUrlData(longUrl,shortId,user[0].id);

return res.status(201).json({message:"short url created successfully",data:userData,
shortUrl:`http://localhost:3000/${shortId}`
});
  
}