const express =require('express');
const userRouter=require('./routes/user.routes');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');



const app = express();
const port = 3000;

// ********************************

app.use(express.json());
app.use(cookieParser());
// na jeson ko express pr skta he na hi cookies ko isi liye middleware lgana lazmi he taky wo read kr sky 

// *********** cors middleware for cross origin resource sharing*******************************

app.use(cors({
  origin: '*', // jo front end ka url he wo yha ayga yani ye urls allow hen baqi ni hen
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // jo methods allow krni hen wo yha ayngy
  credentials: true, // agar ap cookies bhej rhy hen to ye true hona chahiye yani is url ke ilwa baqi kisi url sy req ay to  cookies nhi bhejna yan cookies me hm abhi session id store kr rhy hen wo nhi jay 
}));

// **********helmet middleware for security**********

app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false, // iske bina kuch resources load nahi hotay
}));
// ye helmet Express ka security middleware hota hai. Iska kaam tumhari app ko common web attacks se protect karna hota hai — jaise XSS, clickjacking,

// contentSecurityPolicy	isy fonts wagera load nahi hotay
// crossOriginEmbedderPolicy	kuch resources load nahi hotay
// hm isy true rakhty hen taki security badhy or kuch cheezy load na hon jo hamari app k liye khatra hon abhi filhal false hen



// **********user router**********
// localhost:3000/user
app.use('/user',userRouter)
// ********************************
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// ********************************