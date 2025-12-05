const {pgTable, uuid, varchar , text, timestamp} = require("drizzle-orm/pg-core")
const { userTable } = require("./user.model");



exports.urlTable = pgTable("urls", {
  id: uuid().primaryKey().defaultRandom(),
  longUrl: text().notNull(),
  shortId: varchar( { length: 8 }).notNull().unique(),
  userId: uuid().references(() => userTable.id).notNull(),
  createdAt: timestamp().defaultNow()
  
}

)