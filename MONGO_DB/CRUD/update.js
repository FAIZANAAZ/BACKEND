"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new mongodb_1.MongoClient(uri);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
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
            yield inventory.updateMany({ qty: { $lt: 50 } }, 
            // $lt yani less than yani jo item ki quantity 50 se choti hai unko update karna hai
            {
                $set: { tags: ["kkkk"], size: { h: 1000, w: 1000, uom: 'cmmmmm' } },
                $unset: { tag: "" },
                //   ye tage meny unset isi liye lgay kioky mney phly tags ki jha tag likh k=diya tha jiski wja sy osny uodate kiya or osko tags nhi mila to isny tag ko add kr diya to mojhe ab osko htana tha to mene unset kiya yani agr set ko apni value nhi milti to wo add kr deta he 
                $currentDate: { lastModified: true }
            });
            const updated_money_items = yield inventory.find({ qty: 50 }).toArray(); // ✅ updated item la rahe hain
            console.log(updated_money_items); // ✅ sirf item print ho raha hai
        }
        catch (err) {
            console.error("Error:", err);
        }
        finally {
            yield client.close();
        }
    });
}
run().catch(console.dir);
