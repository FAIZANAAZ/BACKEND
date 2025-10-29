// hm yha pr database sy data mngwa rhy hen or dal rhy hen

const  db = require('./db');
const { userTable } = require('./drizzle/schema');

async function getUser(name, email) {
  const result = await db.select().from(userTable)
  console.log(result);
  
}

getUser()

async function addUser(id, name, email) {
  const result = await db.insert(userTable).values({
    id,
    name,
    email
  }).returning();
  console.log(result);
}

addUser(3, "mohit", "mohit@123");