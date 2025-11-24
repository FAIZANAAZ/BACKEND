

const db=require('../db/connection')
const {eq}=require('drizzle-orm')
const SessionTable= require('../model/session.model')
const userTable=require('../model/user.model')
exports.sessionCheckMiddleware=async(req,res,next)=>{
 
  const sessionId =req.headers['session-id'];
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

 req.user=data

 next()
  
}