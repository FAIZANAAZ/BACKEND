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
const uri = "mongodb://localhost:27017"; // Replace with your MongoDB connection string
const client = new mongodb_1.MongoClient(uri);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const db = client.db("admin"); // Replace with your database name
            const inventory = db.collection("Inventry");
            // console.log(await inventory.find({}).toArray());  //fetch all documents from the collection
            console.log(yield inventory.find({ qty: 50 }).toArray()); //fetch documents with item canvas
            // console.log(await inventory.find({ tags: { $in: ['cotton', 'acrylic'] } }).toArray());
            // $in is used to check if the value is present in the array or not
        }
        finally {
            yield client.close();
        }
    });
}
run().catch(console.dir);
