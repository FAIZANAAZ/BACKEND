"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const dbConnecttion = 'mongodb://127.0.0.1:27017';
const client = new mongodb_1.MongoClient(dbConnecttion);
const dbConnect = async () => {
    await client.connect();
    // yani jb tk connet na ho w8 kro 
    const db = client.db('school');
    // databasebna diya ak
    return db;
};
exports.default = dbConnect;
