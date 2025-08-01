
import express from 'express';
// import reqHandler from './index.js';

const app = express();

// middleware
app.use("/",(req, res, next) => { 
  console.log("come in first middleware",req.url, req.method);
  
  next();
  // ye isi liye call krty hentaky wo next meddleware ko call kry
});

// second middleware
app.use("/",(req, res, next) => { 
  console.log("come in second middleware",req.url, req.method);
  res.send("<p>hello request sent</p>");
  

});

// with methods hm use ki jga direct methods sy bhi km kr skty hen


app.get("/",(req, res, next) => { 
  console.log("come in second middleware",req.url, req.method);
  res.send("<p>hello request sent</p>");
  

});

// jo url diya he jesy / yai 3000 wo osi pr chlyg isky ilawa nhi 

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});