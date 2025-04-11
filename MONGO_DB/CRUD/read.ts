import { MongoClient } from 'mongodb';


const uri = "mongodb://localhost:27017"; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

async function run() {
	try {
		await client.connect();
		const db = client.db("admin"); // Replace with your database name
		const inventory = db.collection("Inventry");

		// console.log(await inventory.find({}).toArray());  //fetch all documents from the collection
		// console.log(await inventory.find({ qty: 100 ,tags:["cotton"]}).toArray());  //fetch documents with item canvas 

		//****************** */ YHA jb hm likhty , lga kr to oska matlb hota he and yani ye bhi r wo bhi lazmi*************


		// console.log(await inventory.find({$or: [{ qty: 50 }, { tags: ['cotton'] }] }).toArray()); 


        // **************yha hy or likhna hota he hard code yani ya ye ya wo yani koi bhi ek ho to chalega********************

		
		// $in is used to check if the value is present in the array or not*****************************

		console.log(await inventory.findOne({ tags: { $in: ['cotton', 'acrylic'] }})); // fetch a document with tags cotton or acrylic

		// *******findone yani wo aray sy hta de ga jo pehla milay ga yani first document ko hi return karega osky bad bhi agr hoga to wo ignore krdega************
		// or findone ko zada tar id dekr use krty hen kioky ye sirf phly waly ko othata he lekin id to hoti hi ak he
		
	} finally {
		await client.close();
	}
}

run().catch(console.dir)