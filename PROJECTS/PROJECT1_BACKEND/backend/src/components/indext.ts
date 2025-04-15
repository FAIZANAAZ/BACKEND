import router from "@/app/ROUTES/web/enquiryrout";
import express from "express";
import mongoose from "mongoose";


const app= express();
app.use(express.json());
// connect momgoose

app.use("/websites/api",router);

mongoose.connect(process.env.DBURL!)
  .then(() => {
	console.log("connected to db");
	app.listen(process.env.PORT, () => console.log("listening on port 3000"));
  })
  .catch((err) => console.log(err));