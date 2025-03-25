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
const uri = 'mongodb://localhost:27017';
const client = new mongodb_1.MongoClient(uri);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const db = client.db('admin');
            const result = yield db.collection('Inventry').insertOne({
                item: 'canvas',
                qty: 100,
                tags: ['cotton'],
                size: { h: 28, w: 35.5, uom: 'cm' }
            });
            console.log('Inserted document id:', result.insertedId);
            const resultMany = yield db.collection('Inventry').insertMany([
                {
                    item: 'canvas',
                    qty: 100,
                    tags: ['cotton'],
                    size: { h: 28, w: 35.5, uom: 'cm' }
                },
                {
                    item: 'paint',
                    qty: 50,
                    tags: ['acrylic'],
                    size: { h: 15, w: 10, uom: 'cm' }
                },
                {
                    item: 'brush',
                    qty: 200,
                    tags: ['synthetic'],
                    size: { h: 20, w: 2, uom: 'cm' }
                },
                {
                    item: 'easel',
                    qty: 30,
                    tags: ['wooden'],
                    size: { h: 150, w: 60, uom: 'cm' }
                }
            ]);
            console.log('Inserted document ids:', resultMany.insertedIds);
        }
        catch (err) {
            console.error('Error:', err);
        }
        finally {
            yield client.close();
        }
    });
}
main();
