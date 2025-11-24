const {pgTable,uuid,varchar,text,timestamp} = require('drizzle-orm/pg-core');


const {userTable}=require('./user.model');


exports.SessionTable=pgTable('users_session', {
  id:uuid().primaryKey().defaultRandom(),
  user_id:uuid().references(()=>userTable.id).notNull(),
  createdAt:timestamp().defaultNow().notNull(),
  
})