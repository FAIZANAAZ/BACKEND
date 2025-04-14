import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("admin"); // Apna database name check kar lein
    const inventory = db.collection("Inventry"); // Collection name bhi check kar lein

    // await inventory.updateOne(
    //     // updateone yani single document ko update karna
    //   { item: 'paint' },
    //   {
    //     $set: { 'qty': 100, 'tags': ['oil'] },
    //     // $set yani kisi bhi field ko update karne ke liye use hota hai yani ye chiz set ho jay
    //     $currentDate: { lastModified: true }
       
    //   }
    // );

    // const updatedItem = await inventory.findOne({ item: 'paint' }); // ✅ updated item la rahe hain
    // console.log(updatedItem); // ✅ sirf item print ho raha hai

    // ***********************************
    // updateMany example

    await  inventory.updateMany(
        { qty:  { $lt:50 } },
        // $lt yani less than yani jo item ki quantity 50 se choti hai unko update karna hai
        {
          $set: { tags: ["kkkk"],size: { h: 1000, w: 1000, uom: 'cmmmmm' } },
          $unset: { tag: "" }, 
        //   ye tage meny unset isi liye lgay kioky mney phly tags ki jha tag likh k=diya tha jiski wja sy osny uodate kiya or osko tags nhi mila to isny tag ko add kr diya to mojhe ab osko htana tha to mene unset kiya yani agr set ko apni value nhi milti to wo add kr deta he 
          $currentDate: { lastModified: true }
        }
      );

    const updated_money_items=await inventory.find({ qty:  50 } ).toArray(); // ✅ updated item la rahe hain
    console.log(updated_money_items); // ✅ sirf item print ho raha hai

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
