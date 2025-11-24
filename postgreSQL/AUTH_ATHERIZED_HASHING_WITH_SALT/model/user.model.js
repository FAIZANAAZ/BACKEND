const {pgTable,uuid,varchar,text} = require('drizzle-orm/pg-core');


exports.userTable=pgTable('users', {
  id:uuid().primaryKey().defaultRandom(),
  username: varchar({length: 255 }).notNull(),
  email: varchar({length: 255 }).notNull().unique(),
  password: text({length: 255 }).notNull(),
  salt:text().notNull(),
  // salt ke zariye hm passsward me koch or chizen add krdenge jese special char etc taky wo strong ho jay jesy 323sddhsd!@#$%^&*
})