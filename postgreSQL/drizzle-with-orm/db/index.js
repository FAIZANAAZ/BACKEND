// conection to database

const { drizzle } = require('drizzle-orm/node-postgres');


const db = drizzle("postgres://postgres:admin@localhost:5432/mydb");
 
module.exports = db
