// model hmara database hota he 

const { pgTable, uuid, text ,varchar,index} = require("drizzle-orm/pg-core");
const AuthorTable= require("./author.model");
const { sql } = require("drizzle-orm");

const BookTable = pgTable("book-library",{
  id:uuid().primaryKey().defaultRandom(),
  // uui ak ad bnayga lambi sy or primary key osko uniq bna denga or default random sy  wo khod bn jaygi
  title:varchar({length:255}).notNull(),
  // var yani variable char lani charcter or choti kam
  description : text().notNull(),
  // text me hm lambi string rkh skte he not null yani khali nhi bhejy koi 
  authorId : uuid().references(() => AuthorTable.id).notNull(),
  // foreign key reference kr rha he author table sy or wo bhi not null he

}, (table) => (
  // table me oper wali pori tablwe arhi he
  // ye indexing k liye he jisse search krna easy ho jy
  [
    index('title_index').using('gin',sql`to_tsvector('english', ${table.title})`, ),
  ]

));

module.exports= BookTable