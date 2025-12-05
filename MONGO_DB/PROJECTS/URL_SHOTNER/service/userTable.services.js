const {eq}= require("drizzle-orm");
const db = require("../db/connection");
const { userTable } = require("../model/user.model");


// hm agr koch db me sy niaklengy find krengy ya phir add krengy oska code hm service me likhengy 
exports.findUserByEmail=async(clientEmail)=>{
    const result = await db.select().from(userTable).where(eq(userTable.email,clientEmail));
    return result
}

// create user in db
exports.createUserIntoDb=async(userName,email,hashPassword)=>{

    const [result] = await db.insert(userTable).values({
        userName:userName,
        email:email,
        password:hashPassword
    }).returning();
    return result;
}