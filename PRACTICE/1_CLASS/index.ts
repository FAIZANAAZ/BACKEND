require('dotenv').config() // .env file sy variables uthany k liye jese PORT etc

const express = require('express') // express ka module include kia

const app = express() // express ka instance banaya app naam sy

// const port = 3000
// ye hard codeed likha he hmny just wesy ye env sy ara abhi 

// 3000 matln kioki ko bolary hen ke litsen kroto hmny 3000 mary broswer me hota he normal

// jab koi /twitter url pe request kare to yeh function chalega
app.get("/twitter", (req, res) => {
  // res mean response and req mean request
  res.send("Twitter"); // user ko "Twitter" text send hoga
});

// jb hm agr localhost3000/twitter likheny browser pr to Twitter aayega likha howa yahi request gai he wha esy hi or bhi bna skty url / de de kr jesy 

// login page ke liye route banaya
app.get("/login", (req, res) => {
  res.send("<h1>Login please at faiza naaz </h1>");
  // or ismy hm koch bhi bhej skty hen sath sath html bhi bhej skty hen 
});

// home page ya root url (/) ka response
app.get('/', (req, res) => {
  res.send('Hello World!') // simple text send kia
})


// yeh object hmara fake data he jisme url or hoorName diye gaye hen
const apidata={
    "data": [
      {
        "url": "https://example.com/1",
        "hoorName": "Hoor 1"
      },
      {
        "url": "https://example.com/2",
        "hoorName": "Hoor 2"
      },
      {
        "url": "https://example.com/3",
        "hoorName": "Hoor 3"
      },
      {
        "url": "https://example.com/4",
        "hoorName": "Hoor 4"
      },
      {
        "url": "https://example.com/5",
        "hoorName": "Hoor 5"
      },
      {
        "url": "https://example.com/6",
        "hoorName": "Hoor 6"
      },
      {
        "url": "https://example.com/7",
        "hoorName": "Hoor 7"
      },
      {
        "url": "https://example.com/8",
        "hoorName": "Hoor 8"
      },
      {
        "url": "https://example.com/9",
        "hoorName": "Hoor 9"
      },
      {
        "url": "https://example.com/10",
        "hoorName": "Hoor 10"
      },
      {
        "url": "https://example.com/11",
        "hoorName": "Hoor 11"
      },
      {
        "url": "https://example.com/12",
        "hoorName": "Hoor 12"
      },
      {
        "url": "https://example.com/13",
        "hoorName": "Hoor 13"
      },
      {
        "url": "https://example.com/14",
        "hoorName": "Hoor 14"
      },
      {
        "url": "https://example.com/15",
        "hoorName": "Hoor 15"
      },
      {
        "url": "https://example.com/16",
        "hoorName": "Hoor 16"
      },
      {
        "url": "https://example.com/17",
        "hoorName": "Hoor 17"
      },
      {
        "url": "https://example.com/18",
        "hoorName": "Hoor 18"
      },
      {
        "url": "https://example.com/19",
        "hoorName": "Hoor 19"
      },
      {
        "url": "https://example.com/20",
        "hoorName": "Hoor 20"
      }
    ]
  }

// yahan humne /api route banaya jo pura data json format me dega
app.get("/api", (req, res) => {
  res.json(apidata) // response me json bhej rahe hen
})



// server ko start krne k liye
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`) // terminal me print hoga
})

// hm jitni bar update krengy otni bar terminal dobara run krna hoga wrna wo ans nhi dega 

// oska ak solution he ke hm nodemon install kr skty hen
