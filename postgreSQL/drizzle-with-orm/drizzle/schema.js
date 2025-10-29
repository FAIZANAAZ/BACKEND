const {pgTable,integer,varchar} = require("drizzle-orm/pg-core");


// ye table bnya he jismy hm table dalengy 
const userTable=pgTable("users",{
     id:integer().primaryKey(),
    //  primarykey yani uiq hogi id
     name:varchar({length:255}).notNull(),
     email:varchar({length:255}).notNull().unique(),
    //  hm ak table me 2 time hm primarykey nhi likh skty hen isi liye hm uniq ka use kry hen ab
})

module.exports={userTable};

// npm i drizzle-kit