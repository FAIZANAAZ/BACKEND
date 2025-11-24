const express =require('express');
const userRouter=require('./routes/user.routes');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

// ********************************

app.use(express.json());
app.use(cookieParser());
// na jeson ko express pr skta he na hi cookies ko isi liye middleware lgana lazmi he taky wo read kr sky 

// localhost:3000/user/signup
app.use('/user',userRouter)
// ********************************
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// ********************************