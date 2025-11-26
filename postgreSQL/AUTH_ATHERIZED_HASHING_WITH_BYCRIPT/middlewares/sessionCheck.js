

const db=require('../db/connection')
const {eq}=require('drizzle-orm')
const {userTable,SessionTable}=require('../model/user.model')
exports.sessionCheckMiddleware=async(req,res,next)=>{
 
  // const sessionId =req.headers['session-id'];

  // ab hm, chaty hen ke headers me cookies na bhejen blky direct cookies me dbase sy othay or cokies me save ho jay or wahi sy nikl jay 
  const sessionId =req.cookies.session_id;
  // yha hmny cookies me sy nikala session id ko
  if(!sessionId){
    req.user=null;//userdata not available
    return next()
  }
  const [session]=await db.select().from(SessionTable).where(eq(SessionTable.id,sessionId))
  if(!session){
    return res.status(401).json({error:" invalid id  "})
  }

  // MAKE A NEW TABLE  to show usertable $ sessiontable
  const [data]=await db.select().from(SessionTable).where(eq(SessionTable.id,sessionId)).leftJoin(userTable,eq(userTable.id,SessionTable.user_id))
  // leftjoin ka matlb left wala table he master table main table oski detil lazim ay 

if (!data){
  res.clearCookie('session_id') // agr data na mile to cookie clear krdo
  return res.status(401).json({error:" session expired please login again "})
}

if(!data.users_session.isActive){

   res.clearCookie('session_id') // cookie clear krdo
  return res.status(401).json({error:" session expired please login again "})
  
}

if(new Date() > new Date(data.users_session.expireAt)){
  // agr abhi ki date sy badi ho gyi to session expire ho gya
  res.clearCookie('session_id') // cookie clear krdo
  return res.status(401).json({error:" session expired please login again "})
}




 req.user=data

 next()
  
}