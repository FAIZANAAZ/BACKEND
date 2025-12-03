// db/index.js

// .env file ko load karne ke liye
require('dotenv').config();

const { drizzle } = require("drizzle-orm/node-postgres");
// const { Client } = require('pg'); // 'pg' library se Client import karein

// hm client tb use krty hen jb hm sync connection chahte hen yani ak waqt me ak req hi ja paygi h, isko async bnany ke liye  pool 
// ka use krty hen

const { Pool } = require('pg');
// ****************************

// Ek naya client banayein
// const client = new Client({
//   connectionString: process.env.DATABASE_URL, // .env file se URL read kar rahe hain
// });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // .env file se URL read kar rahe hain
});

// ****************************

// Database se connect karein
// Note: Production apps mein 'Pool' use karna behtar hai, but yeh simple setup hai
// client.connect(); 

pool.connect()
// Drizzle ko 'pg' client ke saath initialize karein
// const db = drizzle(client);

const db = drizzle(pool);


// 'db' object ko export karein taaki doosri files use kar sakein
module.exports = db;