import { MongoClient } from 'mongodb';


const uri = "mongodb://localhost:27017"; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

async function run() {
	try {
		await client.connect();
		const db = client.db("admin"); // Replace with your database name
		const inventory = db.collection("Inventry");

		// console.log(await inventory.find({}).toArray());  //fetch all documents from the collection
		console.log(await inventory.find({ qty: 50 }).toArray());  //fetch documents with item canvas
		// console.log(await inventory.find({ tags: { $in: ['cotton', 'acrylic'] } }).toArray());
		// $in is used to check if the value is present in the array or not
	} finally {
		await client.close();
	}
}

run().catch(console.dir)