import express, { Request, Response } from 'express';


const app = express();
app.use(express.json());
// express.json() ek middleware hai arna response ko samj hi nhi pata broswer
// Ye server ko allow karta hai ke wo JSON data ko samjhe
// Iske bina req.body kaam nahi karega


// ******custum middleware********

let myToken='1234';

const  checkToken = (req: Request, res: Response, next: Function): void => {
    // Ye middleware function hai jo har request se pehle chalega
    if(req.query.token !== myToken||req.query.token==""||req.query.token==undefined) {
        res.send({status:0, message: 'Unauthorized'});
        
    // Ye check karta hai ke kya request me token === hai ya nahi
   
    }else{
        next();

    }
        // next() ko call karna zaroori hai warna request aage nahi badegi yani code agy run hi nhi hoga 
}

export default checkToken;