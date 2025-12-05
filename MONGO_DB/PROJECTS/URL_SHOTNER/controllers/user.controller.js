const {createhashPassword} = require('../utils/bcrypt');
const {createUserIntoDb, findUserByEmail} = require('../service/userTable.services');
const {comparePassword} = require('../utils/bcrypt');
const {createJwtToken} = require('../utils/jwt');





// signup function
exports.signupFunction = async (req, res) => {

    const { userName, email, password } = req.body;
  const existingUser = await findUserByEmail(email);

    if (!existingUser) {
      return res.status(400).json({ message: "User already exists with this email" });
    
    }

    // password hash karna
    const hashPassword = await createhashPassword(password);

    const newUser = await createUserIntoDb(
      userName,
      email,
      hashPassword
    );

    return  res.status(201).json({ message: "User created successfully", user: newUser });
  
  
 
};

// login function
exports.loginFunction = async (req, res) => {
  
    const {email,password} = req.body;

    const existingUser = await findUserByEmail(email);
    console.log("existingUser -> ✅✅🤖🤖", existingUser);
    
    if(!existingUser){
      return res.status(400).json({message:"User does not exist with this email"});
    }

    // password compare karna jo hash kiya tha osko en hash krky 
    const isMatch= await comparePassword(password, existingUser[0].password);

   console.log("req password ⭐⭐ ->", password);
console.log("db password ▶▶😶😶💛💛->", existingUser.password);

    // agr passward match ni krta
    if(!isMatch){
      return res.status(400).json({message:"Invalid credentials"});
    }

    // create JWT payload
    const payload = {
      userId: existingUser[0].id,
      email: existingUser[0].email
    };

    // create JWT token
    const token = createJwtToken(payload);

    // setting cookie for 7 day
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7*24*60*60*1000 // 7 days
    });

    return res.status(200).json({message:"Login successful", token:token});

  
}

// redirectFunction
exports.redirectFunction=async(req,res)=>{
  const shortid=req.params.shortId;

  const [entry]=await db.select().from(urlTable).where(eq(urlTable.shortId,shortid));

  if(entry){
    return res.redirect(entry.longUrl);
  }else{
    return res.status(404).json({message:"Short URL not found"});
  }
}