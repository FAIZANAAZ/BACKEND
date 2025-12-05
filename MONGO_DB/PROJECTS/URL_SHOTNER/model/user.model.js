
const { pgTable, uuid, varchar , text} = require("drizzle-orm/pg-core");

const userTable = pgTable("users", {

  id: uuid("id").primaryKey().defaultRandom(), 
  
  userName: varchar("name", { length: 255 }).notNull(),
 
  email: varchar("email", { length: 255 }).notNull().unique(),
  
  password: text().notNull()
});


module.exports = { userTable };