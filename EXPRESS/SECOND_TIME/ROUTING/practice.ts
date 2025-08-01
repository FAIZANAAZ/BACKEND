import express from 'express';

const app = express();

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));
// Root GET route - now sends a response
app.get("/", (req, res, next) => {
  console.log("handle first get request", req.url, req.method);
  res.send("<p>Hello from root route!</p>");

});

// GET /contact - sends the contact form
app.get("/contact", (req, res, next) => {
  console.log("please contact", req.url, req.method);
  res.send(`<p>hello contact</p>
    <form action="/contact" method="POST"> 
      <input type="text" name="username" placeholder="Enter your name"><br>
      <input type="email" name="email" placeholder="Enter your email"><br>
      <input type="number" name="age" placeholder="Enter your age"><br>
      <input type="submit" value="Submit"/>
    </form>`);
});

// POST /contact - handles form submission
app.post("/contact", (req, res, next) => {
  console.log("handle post request", req.url, req.method);
  console.log("Form data received:", req.body);  // You can access form data here
  res.send("<p>We will contact you soon</p>");
});

// yha hmny post ka use kiya he lekin phir bhi hmy ye sms broswer pr du=ikhyga kioky broswer sirf get ko hi dikhata he lekin wo form ko samjhta he hm form me action ke sath jo bhi method pass krengy browser osko handle kryga 

const port = 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
