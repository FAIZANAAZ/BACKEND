const { pgTable, uuid, varchar } = require("drizzle-orm/pg-core");

const AuthorTable = pgTable("Author",{
  id:uuid().primaryKey().defaultRandom(),
  firstName:varchar({length:100}).notNull(),
  lastName : varchar({length:100}),
  email :varchar({length:255}).notNull().unique(),


  
})

module.exports= AuthorTable