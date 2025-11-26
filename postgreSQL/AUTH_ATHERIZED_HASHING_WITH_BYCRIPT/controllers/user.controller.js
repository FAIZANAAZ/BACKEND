const db=require('../db/connection')
const { eq } = require('drizzle-orm');
const {userTable}=require('../model/user.model') 
const {SessionTable}=require('../model/user.model')
const bcrypt=require('bcrypt')


exports.signupFunction = async(req, res) => {
  try{
    const {username,email,password}=req.body
// in database find email 
  const [existingUser]=await db.select().from(userTable).where(eq(userTable.email,email))

  // user chack validation
  if(existingUser){
    return res.status(400).json({error:`${email } Email already exists`})
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
    return res.status(400).json({error:`${email } Email not exists`})
  }

  const is_valid_password=await bcrypt.compare(password,existingUser.password)
// hm hash sy nikal kr compare krny ke liye osy db me signup krty wat jo hash howa wa passward he wo dengy or ak apna passward jo user dega compare krky hm isko encrypt krdengy
  

// passward check
if(!is_valid_password){
  return res.status(400).json({error:"invalid password"})
}

// expire session
const expireAt=new Date(); // 1 hour in milliseconds
expireAt.setDate(expireAt.getDate() + 7);
// expireAt.setSeconds(expireAt.getSeconds() + 5);
// ismy hm ye khry hen ke expireAt ke variable me current date aygi jb user logi kryga or session create hoga hmny kha .getdate() sy hmny kha ke is time me 7 days add krdo to ab
// 

// create session 
  const [session]=await db.insert(SessionTable).values({
    user_id:existingUser.id,
    expireAt:expireAt
  }).returning(
    {
       sessionId: SessionTable.id
    }
  )


  // set cookie in browser
  res.cookie('session_id',session.sessionId,{
    httpOnly:true,
    secure:false,//abhi development me he islye false krdia productin me true krdena he kioky abhi koi bhi nhi he frontent
    sameSite:"lax",
    maxAge:7*24*60*60*1000 // 7 days in millisecond yani yha hmny kha iski age 7 days hen or 7 days sy zada pr hm if else sy control krengy 
  })

  return res.status(200).json({message:"login successfully",status:true,data:session})
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
      const sessionId=req.cookies.session_id;

      if(sessionId){
        await db.update(SessionTable).set({isActive:false}).where(eq(SessionTable.id,sessionId))
      }
      res.clearCookie('session_id')
      return res.status(200).json({message:"logout successfully",status:true})
    } catch (error) {
      console.error("Error in logout function:", error);
      return res.status(500).json({error:"Internal server error"})
    }
    }
  