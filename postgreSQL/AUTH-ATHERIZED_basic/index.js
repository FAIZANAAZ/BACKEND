const express = require('express');
const app = express();
const port = 3000;

const user_db={

}//{token:{username,passward,emial}} is trha ayga ismy data 

const emails_db=new Set() // to store email only
// ************************************************
app.use(express.json())
// ************************************************

app.post('/login',(req, res) => {
  const  {token} = req.body

  const token_check=user_db[token]
  if(!token_check){
    res.status(400).json({status:"you do not have an account please sign-up first"})
  }

  res.status(200).json({status:"you have login successfully ",data:token_check})

})


// ************************************************




app.post('/signup',(req, res) => {
  const  {username, password, email} = req.body

  if(emails_db.has(email)){
    res.status(400).json({status:"Email already taken"})
  }

  // generate token numbers

  
  const token=`${Date.now()}`//3453533376 time har bar different ho hoga 
  
  // do a entry in dairy 
  user_db[token]= {username, password, email}
  emails_db.add(email)

  
  res.status(201).json({status:"Signup successful", token:token})})

//***************************** */ 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// ************************************************
// ************************************************
// ************************************************
