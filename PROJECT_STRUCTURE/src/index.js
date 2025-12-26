import dotenv from "dotenv";
import app from "./app.js";
import { connectMongoDb } from "./db/connection.js";


dotenv.config()

// dotenv.config({ path: "./env/.env" });;

// ye hm isi liye likhty hen taky koi agr clone kry to env ki file ko sahi sy bahir rakhy osko hmny btaya he ke hmny ./env yani bahir rakha he wo khi kisi folder ke ander na rakh dy agr rakh bhi de to wo phir har jga path change krly variables ka

connectMongoDb(process.env.MONGO_DB_URL)
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log("server running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
    // agr mongodb sy connect nhi ho paya to server ko start nhi krway gy or error show krdy gy
  });
