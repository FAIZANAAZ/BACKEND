import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("admin"); // Apna database name check kar lein
    const inventory = db.collection("Inventry"); // Collection name bhi check kar lein
    
    // await inventory.deleteOne({ item: 'paint' });
    // // deleteOne yani single document ko delete karna jo phly mil jay bhly pain name sy or bhi hon

    // *****************************


    // await inventory.deleteMany({ qty: { $lt: 50 } });
    // // deleteMany yani multiple document ko delete karna jo qty ki value 50 se choti ho

    // ******************************

    // await inventory.deleteMany({});
    // ye emty krdega

    // ******************************
   

    const deletitem=await inventory.find({ }).toArray(); // ✅ find empty yani wo sb  koch dikhayga
    console.log(deletitem); // ✅ sirf item print ho raha hai

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
