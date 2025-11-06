

// .env file ko load karne ke liye config men chala diya 
require('dotenv').config();

const { drizzle } = require("drizzle-orm/node-postgres");




// Drizzle ko 'pg' client ke saath initialize karein
const db = drizzle(process.env.DATABASE_URL);

// 'db' object ko export karein taaki doosri files use kar sakein
module.exports = db;