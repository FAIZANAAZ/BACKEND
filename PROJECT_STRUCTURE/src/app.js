import express from "express";

const app = express();

app.use(express.json({limit: "10kb"}));//body parser jo json data ko read krty hen
app.use(express.urlencoded({extended: true, limit: "10kb"}));//ye isi liye agr url me koi space wagera jo koi special character ho to wo b read kr ly
app.use(express.static("public"));//yani jo bhi static files hen wo public folder sy ly ly iska code change nhi hoga 

app.get("/", (req, res) => {
  res.end("hello world");
});

export default app;
