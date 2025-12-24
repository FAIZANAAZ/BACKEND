import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

// ye hm isi liye likhty hen taky koi agr clone kry to env ki file ko sahi sy bahir rakhy osko hmny btaya he ke hmny ./env yani bahir rakha he wo khi kisi folder ke ander na rakh dy agr rakh bhi de to wo phir har jga path change krly variables ka


const port = process.env.PORT || 3000;




app.listen(port, () => {
  console.log("server running on port 3000");
});
console.log(process.env.DATABASE_URL);
