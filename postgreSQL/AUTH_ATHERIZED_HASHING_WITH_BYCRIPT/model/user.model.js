const {pgTable,uuid,varchar,text,timestamp} = require('drizzle-orm/pg-core');


exports.userTable=pgTable('users', {
  id:uuid().primaryKey().defaultRandom(),
  username: varchar({length: 255 }).notNull(),
  email: varchar({length: 255 }).notNull().unique(),
  password: text({length: 255 }).notNull(),
 
})



exports.SessionTable=pgTable('users_session', {
  id:uuid().primaryKey().defaultRandom(),
  user_id:uuid().references(()=> exports.userTable.id).notNull(),
  createdAt:timestamp().defaultNow().notNull(),
  expireAt:timestamp().notNull(),
  
})