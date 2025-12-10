const express = require('express');
const app = express();
const port = 8000;

app.get('/test', (req, res) => {
  res.end('Hello llllll!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});