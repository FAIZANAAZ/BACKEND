import express, { Request, Response } from 'express';
import dbConnect from './dbconnection';
import { ObjectId } from 'mongodb';

const app = express();
const port = 3000;

app.use(express.json());

// read**********************\

app.get('/read',async (req:Request, res:Response) => {
    const my_db=await dbConnect()
    //   ye hm dbconnection se import kiya hai
    const collection = my_db.collection('student')
    const data =await collection.find().toArray()

    
    const fonrtend={
        status:1,
        message:'student data',
        data}
    
  res.send(fonrtend);
});


// post***********************
app.post('/insert', async(req:Request, res:Response) => {
  const my_db=await dbConnect()
//   ye hm dbconnection se import kiya hai
  const collection = my_db.collection('student')

  const {name, age} = req.body
//   body sy nikala he jo data api me aya he 
    const data ={name, age}

//   data ko object me daal diya

    const result = await collection.insertOne(data)
//   ye collection me insert kiya
const fonrtend={
    status:1,
    message:'data inserted successfully',
    result}

res.send(fonrtend)
//  ye response me bhej diya isy ye frontend pr dikhega osko asani hogi ke hn kam sahi howa he


});



// update**********************

app.put('/update/:id', async (req:Request, res:Response) => {
  const {id} = req.params
  const {name, age} = req.body
  const obj = {name, age}

  if (name === '' ||name===null||name ===undefined) {
    obj["name"]=name

  }
  if (age === '' ||age===null||age ===undefined) {
    obj["age"]=age

  }
  //   ye condition lagaya he ki name aur age ki value null ya empty nhi ho to

  const my_db=await dbConnect()
//   ye hm dbconnection se import kiya hai
  const collection = my_db.collection('student')
  const updatedata=await collection.updateOne({_id:new ObjectId(id)},{$set:obj})

  const fonrtend={
    status:1,
    message:'data updates successfully',
    updatedata}

res.send(fonrtend)
})
// http://localhost:3000/update/67fcf8dd47a75aebc1fc3c5a
// delete**********************
app.delete('/delete/:id', async (req:Request, res:Response) => {
    const my_db=await dbConnect()
    //   ye hm dbconnection se import kiya hai
      const collection = my_db.collection('student')
      const {id} = req.params 
      // hm jb url me id pass krenge to usko req.params me nikal jayega or jo id frontend sy aygi wahi data delet ho jayga (http://localhost:3000/delete/67fabc2be1ae2d74aa67c640)
      const result = await collection.deleteOne({_id:new ObjectId(id)})
      const fonrtend={
        status:1,
        message:'data delete successfully',
        result}
    
    res.send(fonrtend)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// http://localhost:3000/delete/67fcf8dd47a75aebc1fc3c5a
// ye id hm get ko chala kr nikalengy