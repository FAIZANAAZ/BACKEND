const express = require('express');
const app = express();
const port = 3000;

function globleMiddleware(req, res, next) {
  console.log('Global Middleware');
  next();
}

app.use( globleMiddleware);


app.get('/', (req, res) => {
  res.json({message:'Hello World!'});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});