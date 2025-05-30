// lib/mongodb.js
// https://medium.com/@turingvang/next-js-beginner-mongodb-crud-example-tutorial-db2afdb68e25
import mongoose from 'mongoose';


const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}


/** 
 * Cached connection for MongoDB.
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

let cached = (global as typeof globalThis & { mongoose: MongooseCache }).mongoose;

if (!cached) {
  cached = (global as typeof globalThis & { mongoose: MongooseCache }).mongoose || { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}


  

export default connectToDatabase;
