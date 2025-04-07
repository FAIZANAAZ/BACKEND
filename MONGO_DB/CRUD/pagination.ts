import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function main() {
    try {
    
        await client.connect();
        const db = client.db("admin");
        const inventory = db.collection("Inventry");
        
        // const limit1= await inventory.find({}).limit(3).toArray();
        // // linit 3 mtlab 3 document ko dikhayga yani 3 document la k dega start ke bs
        // console.log(limit1);

        // **************************************

        const sort1= await inventory.find({}).sort({qty:-1}).toArray();

        console.log(sort1);

        // .sort({ qty: -1 }): Yeh documents ko qty field ke descending order (high to low) mein sort karta hai.

        // -1 = descending (bara → chhota)

        // 1 = ascending (chhota → bara)

        // // **************************************

        // const skip1= await inventory.find({}).skip(3).toArray();


        // // // skip 3 mtlab 3 document ko chhod k baqi document dikhayga yani 3 document skip karke baqi dikhayga

        // // ye pagination me kam ata he zada
        // console.log(skip1);


        // // **************************************

        // pagination example

        const page = 2; // page number
        const limit = 8; // items per page
        const skip = (page - 1) * limit; // calculate skip value
        const paginatedItems = await inventory.find({}).skip(skip).limit(limit).toArray();
        
        console.log(paginatedItems); // display paginated items
        // // ye pagination me kam ata he zada

    } catch (err) {
        console.error('Error:', err);
    } finally {
        await client.close();
    }
}

main();

// https://www.mongodb.com/docs/manual/tutorial/insert-documents/