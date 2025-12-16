require("dotenv/config");
const express =require('express');
const {connectMongoDb} = require("./db/connection");
const Product = require("./models/product.schema");




const app = express();
app.use(express.json());
connectMongoDb(process.env.MONGO_URL);


app.get("/topMostExpensiveProducts", async(req, res) => {
 const products = await Product.aggregate([

  {
    $sort: {price: -1}
    // yani price ke basis pe sort krny ke liye yani sbsy bara phir osy chota ye dikhayga price ke name sy jis property ka anme he osko
  },
  {
    $limit: 10
    // yani top 10 products ko show krny ke liye
  }

 ])

 return res.json(products);
});

app.listen(3000, () => {
  console.log("server is running");
});