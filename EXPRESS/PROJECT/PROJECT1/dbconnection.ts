import { MongoClient } from "mongodb"




const dbConnecttion='mongodb://127.0.0.1:27017'
const client = new MongoClient(dbConnecttion);


const dbConnect= async () => {
    await client.connect();
    // yani jb tk connet na ho w8 kro 
    const db = client.db('school')
    // databasebna diya ak
    return db
}

export default dbConnect
