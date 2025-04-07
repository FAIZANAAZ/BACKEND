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
            // await inventory.deleteOne({ item: 'paint' });
            // // deleteOne yani single document ko delete karna jo phly mil jay bhly pain name sy or bhi hon
            // *****************************
            // await inventory.deleteMany({ qty: { $lt: 50 } });
            // // deleteMany yani multiple document ko delete karna jo qty ki value 50 se choti ho
            // ******************************
            // await inventory.deleteMany({});
            // ye emty krdega
            // ******************************
            const deletitem = yield inventory.find({}).toArray(); // ✅ find empty yani wo sb  koch dikhayga
            console.log(deletitem); // ✅ sirf item print ho raha hai
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
