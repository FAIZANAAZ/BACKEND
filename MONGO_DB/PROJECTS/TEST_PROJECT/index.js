const express = require('express');
const { connectDB } = require('./db/connection');
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const PORT=3000

connectDB(process.env.MongoDB_URL).then(()=>{
    console.log("Database connected successfully");
} )

// hmny yha run kiya he connection ke function ko taky jb ye file chly to w bhi run ho jay 

app.use(express.json());

app.use(cookieParser());

app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});