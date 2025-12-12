const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//****************************** */
app.get('/', (req, res) => {
  res.status(200).send('health check passed');
});


// ****************************** */
app.get('/api', (req, res) => {
  return res.json({
    message: 'i am your aws api on ECS machine!',
    developer:"faiza",
    cloud:"AWS",
    timestamp: new Date()
  })
})
//****************************** */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});