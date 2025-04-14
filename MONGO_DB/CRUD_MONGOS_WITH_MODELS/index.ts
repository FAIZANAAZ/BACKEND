import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './APP/ROUTS/web/inquiryrout';


dotenv.config(); // ✅ Load environment variables

const app = express();
app.use("/web/api/enquiry",router)

// hm web/api/enquir ki jga koch hi name de skty hen asal me ye ak atatic rout hmny de ddiya he ke sary api routs jo hen wo is web/api/enquir kebad aygy jesy 
// http://localhost:3000/web/api/enquiry/enquiry-insert for post 
// http://localhost:3000/web/api/enquiry for get 

// yha hm insert krengy chema ko 
app.use(express.json());

mongoose.connect(process.env.DURL || '')
  .then(() => {
    console.log('MongoDB connected')
    app.listen("3000", () => console.log("Listening on port 3000"));
})
  .catch((err) => console.log('MongoDB connection error:', err));

// mongoose sy mongodb khod connetc ho gya is code sy 


// phir datbase me jakr dekhengy ke bna ya nhi bna data crtl+r keky matlb refresh krky 
