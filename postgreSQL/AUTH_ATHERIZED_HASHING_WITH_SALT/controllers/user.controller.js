const db=require('../db/connection')
const { eq } = require('drizzle-orm');
const {userTable}=require('../model/user.model') 
const {randomBytes}=require("node:crypto") 
const {createHash}=require("node:crypto")
const {SessionTable}=require('../model/session.model')

exports.signupFunction = async(req, res) => {
  const {username,email,password}=req.body
// in database find email 
  const [existingUser]=await db.select().from(userTable).where(eq(userTable.email,email))

  // user chack validation
  if(existingUser){
    return res.status(400).json({error:`${email } Email already exists`})
  }

// create a salt***********
const salt= randomBytes(256).toString('hex')
// ye bhut bara passward jenerate krky dega or har bar different hoga ye jesy 4645453453434xsdsxds12@#!@


// convert into algoritham
const passwordHash =createHash('sha256',salt).update(password+salt).digest('hex')
// HMNY YHA DONO KO + KRKY PHLY bara kiya phir update me salt or passward ko milaya or hash me convert krdiya 


//*********************** */
// save into db
  const result=await db.insert(userTable).values({
    username:username,
    email:email,
    salt:salt,
    password:passwordHash
  
  }).returning({data:userTable})
  // pora usertable agr creaye howa to a jayga 
  return res.status(201).json({message:"user created",status:true,data:result})
}




//************************************ */ login function

exports.loginFunction=async(req,res)=>{
const {email,password}=req.body

const [existingUser]=await db.select().from(userTable).where(eq(userTable.email,email))

  if(!existingUser){
    return res.status(400).json({error:`${email } Email not exists`})
  }

  // extract a salt***********
const db_salt= existingUser.salt
// salt save krwaya tha to nikl bhi liya 

// convert into algoritham
const new_passwordHash =createHash('sha256').update(password+db_salt).digest('hex')
  
if(new_passwordHash!==existingUser.password){
  return res.status(400).json({error:"invalid password"})
}

// save into db
  const [session]=await db.insert(SessionTable).values({
    user_id:existingUser.id,
  }).returning(
    {
       id: SessionTable.id
    }
  )

  return res.status(200).json({message:"login successfully",status:true,data:session})
  }


exports.homeFunction=async(req,res)=>{

  const userData=req.user

  if(userData){
    // all information from userdata (combine table information)
    return res.status(200).json({message:"you are logged in",status:true,data:userData})
  }else{
    return res.status(401).json({message:"you are not logged in",status:false})
  }
  }