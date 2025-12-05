const express= require('express');
const userRoute = require("./routes/user.routes");
const urlRoute = require("./routes/url.routes");
const cookieParser = require('cookie-parser');


const app = express();
const port = 3000;
const dotenv =require('dotenv').config()

// middleware
app.use(express.json());
app.use(cookieParser());

// Routes*************
app.use("/user",userRoute)
app.use("/url",urlRoute)

// ***********Api





app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});