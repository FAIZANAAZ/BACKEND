"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import express:
// Express ek Node.js ka web framework hai — is line se hum usse apne project me laa rahe hain.
// { Request, Response }:
// Ye TypeScript ke types hain jo express se milte hain. Inka use hum request aur response objects ke liye type safety dene ke liye karte hain (yani agar koi galat cheez likh di to error mil jaye).
const app = (0, express_1.default)();
// Ye line actual me Express ka server create karti ha
const port = 3000;
app.use(express_1.default.json());
// express.json() ek middleware hai arna response ko samj hi nhi pata broswer
// Ye server ko allow karta hai ke wo JSON data ko samjhe
// Iske bina req.body kaam nahi karega
// ******custum middleware********
let myToken = '1234';
// custom midleware ka matlb ye he ke wo abhi har rout pr applay hojayga hm agr chahty hn ke hm ak rout middleware krty hen jismy hm btaty hen sirf ispr hi applay ho 
const checkToken = (req, res, next) => {
    // Ye middleware function hai jo har request se pehle chalega
    if (req.query.token !== myToken || req.query.token == "" || req.query.token == undefined) {
        res.send({ status: 0, message: 'Unauthorized' });
        // Ye check karta hai ke kya request me token === hai ya nahi
    }
    else {
        next();
    }
    // next() ko call karna zaroori hai warna request aage nahi badegi yani code agy run hi nhi hoga 
};
app.use(checkToken);
// ye pass hoga to hi agy ka code run hoga wrna nhi hoga pass hoga to next middleware pr bhejdega
const mypasward = "12340";
app.use((req, res, next) => {
    // Ye middleware function hai jo har request se pehle chalega
    if (req.query.pass !== mypasward || req.query.pass == "" || req.query.pass == undefined) {
        res.send({ status: 0, message: 'wrong passward' });
        // Ye check karta hai ke kya request me token === hai ya nahi
    }
    else {
        {
            res.send({ status: 1, message: 'done passward & token' });
        }
    }
    next();
    // next() ko call karna zaroori hai warna request aage nahi badegi yani code agy run hi nhi hoga 
});
// **********`*********************
app.get('/', (req, res) => {
    // Ye function do cheezon ka use karta hai:
    // req: request object (client ka data hota isme)
    // res: response object (jo ham client ko bhejte hain)
    res.send({ status: 1, message: 'Hello World!' });
});
// for params
app.get('/user/:id', (req, res) => {
    res.send({ status: 1, message: 'dynamic params', id: req.params.id });
});
// GET request me body kaam nahi karti — zyada tar POST/PUT me hoti hai.
// ye jo hmny likha he id yehi hmara dynmic params he id ki jga koch bhi likh skty hen
// id wahi he jo hmny url me likihe iski jga koch or likhty towahi . krky bhi likhty
// http://localhost:3000/user/1
// is yrl or ye acees hoga  2  likhen 4 8 koch bhi ye a jayga or id me wahi print kryga
// *************************
app.post('/api', (req, res) => {
    res.send({ status: 1,
        message: 'Hello API!',
        //  is trha jeson ka data get hoga
        data: req.body,
        //  ye hmy query string se data get hoga
        queary: req.query,
        headers: req.headers,
        // Client jab request bhejta hai, to headers me info bhejta hai (jaise auth token, content-type, etc.)
    });
    // ak or tarika hota he response bhejqny ka
    res.status(200).json({ status: 1,
        message: 'Hello API!',
        //  is trha jeson ka data get hoga
        data: req.body,
        //  ye hmy query string se data get hoga
        queary: req.query,
        headers: req.headers,
    });
    console.log(req.body);
});
app.listen(port);
