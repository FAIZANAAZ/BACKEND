import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        const db = client.db('admin');

        const result = await db.collection('Inventry').insertOne({
            // insertone yani single document
            // yani ek document ko insert karna
            item: 'canvas',
            qty: 100,
            tags: ['cotton'],
            size: { h: 28, w: 35.5, uom: 'cm' }
        });

        console.log('Inserted document id:', result.insertedId);

        const resultMany = await db.collection('Inventry').insertMany([
            // inventry jo likhe he ye or monogodb pr jo bnaya he name jismy data jayga name ame hona chiye
            // insertmany yani multiple documents
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
    } catch (err) {
        console.error('Error:', err);
    } finally {
        await client.close();
    }
}

main();

// https://www.mongodb.com/docs/manual/tutorial/insert-documents/