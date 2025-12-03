const db=require('../db/connection')
const { eq } = require('drizzle-orm');
const {userTable}=require('../model/user.model') 
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');


exports.signupFunction = async(req, res) => {
  try{
    const {username,email,password}=req.body
// in database find email 
  const [existingUser]=await db.select().from(userTable).where(eq(userTable.email,email))

  // user chack validation
  if(existingUser){
    return res.status(400).json({error:`this Email already exists`})
  }


// convert into algoritham
const passwordHash =await bcrypt.hash(password,10)
//*********************** */
// save into db
  const result=await db.insert(userTable).values({
    username:username,
    email:email,
   
    password:passwordHash
  
  }).returning({data:userTable.id})
  // pora usertable agr creaye howa to a jayga 
  return res.status(201).json({message:"user created",status:true,data:result})
  }catch(error){
    console.error("Error during signup:", error);
    return res.status(500).json({error:"Internal server error"})
  }
}




//************************************ */ login function

exports.loginFunction=async(req,res)=>{
  try{
    const {email,password}=req.body

const [existingUser]=await db.select().from(userTable).where(eq(userTable.email,email))

  if(!existingUser){
    return res.status(400).json({error:`this Email not exists`})
  }

  const is_valid_password=await bcrypt.compare(password,existingUser.password)
// hm hash sy nikal kr compare krny ke liye osy db me signup krty wat jo hash howa wa passward he wo dengy or ak apna passward jo user dega compare krky hm isko encrypt krdengy
  

// passward check
if(!is_valid_password){
  return res.status(400).json({error:"invalid password"})
}




const  token = jwt.sign(
  { userId: existingUser.id, email: existingUser.email },
  process.env.JWT_SECRET,
  { expiresIn: '7d' } // token 7 days k bad expire ho jyga
  );

  console.log("token",token);
  
  // set cookie in browser
  res.cookie('token',token,{
    httpOnly:true,
    secure:false,//abhi development me he islye false krdia productin me true krdena he kioky abhi koi bhi nhi he frontent
    sameSite:"lax",
    maxAge:7*24*60*60*1000 // 7 days in millisecond yani yha hmny kha iski age 7 days hen or 7 days sy zada pr hm if else sy control krengy 
  })

  return res.status(200).json({message:"login successfully",status:true,data:{token:token} })
  }catch(error){
    console.error("Error during login:", error);
    return res.status(500).json({error:"Internal server error"})
  }
  }
  


exports.homeFunction=async(req,res)=>{

 try {
   const userData=req.user

  if(userData){
    // all information from userdata (combine table information)
    return res.status(200).json({message:"you are logged in",status:true,data:userData})
  }else{
    return res.status(401).json({message:"you are not logged in",status:false})
  }
 } catch (error) {
  console.error("Error in home function:", error);
  return res.status(500).json({error:"Internal server error"})
 }
  }

// logout function
  exports.logoutFunction=async(req,res)=>{
    try {
      res.clearCookie('session_id')
      return res.status(200).json({message:"logout successfully",status:true})

    } catch (error) {
      console.log("Error in logout function:", error);
      return res.status(500).json({error:"Internal server error"})
    }
    }
  
// admin dashboard function
exports.adminDashboard=async(req,res)=>{

  if(req.user==null){
    return res.status(400).json({error:"User data not found"})
  }
  // hmny yha ;ikha he ke phly admin jakr signup kryga phir  login kryga phir wo admin dashborad pr jayga url sy osy hm chack krygy ke jo user jara he wo null to nhi he or middleware ke zariye dekhengy ke ye ading he ya user he agr admin he to hi osy access dena he

  return res.status(200).json({
    message:"welcome to admin dashboard",
    status:true,
    adminData:req.user})

}
