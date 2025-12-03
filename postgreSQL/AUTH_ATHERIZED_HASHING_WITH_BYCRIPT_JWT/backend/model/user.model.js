const {pgTable,uuid,varchar,text,pgEnum} = require('drizzle-orm/pg-core');

const userRoleEnum= pgEnum('user_role',['user','admin']);

exports.userRoleEnum=userRoleEnum
// ye hmny yha bnya he taky hm isko controller me use krsky hmny isko exports ke zariye bahir bhjea he

exports.userTable=pgTable('users', {
  id:uuid().primaryKey().defaultRandom(),
  username: varchar({length: 255 }).notNull(),
  email: varchar({length: 255 }).notNull().unique(),
  password: text({length: 255 }).notNull(),
  role:userRoleEnum().notNull().default('user')
 
})



