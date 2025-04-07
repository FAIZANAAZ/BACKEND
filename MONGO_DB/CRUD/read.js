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
            // console.log(await inventory.find({ qty: 100 ,tags:["cotton"]}).toArray());  //fetch documents with item canvas 
            //****************** */ YHA jb hm likhty , lga kr to oska matlb hota he and yani ye bhi r wo bhi lazmi*************
            // console.log(await inventory.find({$or: [{ qty: 50 }, { tags: ['cotton'] }] }).toArray()); 
            // **************yha hy or likhna hota he hard code yani ya ye ya wo yani koi bhi ek ho to chalega********************
            // $in is used to check if the value is present in the array or not*****************************
            console.log(yield inventory.findOne({ tags: { $in: ['cotton', 'acrylic'] } })); // fetch a document with tags cotton or acrylic
            // *******findone yani wo aray sy hta de ga jo pehla milay ga yani first document ko hi return karega osky bad bhi agr hoga to wo ignore krdega************
        }
        finally {
            yield client.close();
        }
    });
}
run().catch(console.dir);
