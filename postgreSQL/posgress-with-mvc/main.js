const express = require('express');
const { globleMiddleware } = require('./middleware/globalmeddleware');
const bookRoutes = require('./routes/book.route');
const app = express();
const port = 3000;
const authorRoutes = require('./routes/author.route');

// global middleware****************
app.use(express.json());
app.use( globleMiddleware);
// basic route

app.get("/", (req, res) => res.status(200).json({
  status: true,
  message: "book store api",
  version: "1.0.0",
  endpoints:{
    health: "/health",
    books: "/api/v1/books",
    author: "/api/v1/authors"
  }
}));
// hmny localhost pr koch rkha nhi he to error ayga hmny error ko htany ke liye user ko info send krdi ke ye ye hen endpoint isko use krlo to data mil jayga or api ki info koch


// health check
app.get("/health", (req, res) => res.status(200).json({
  status: "OK",
  timestamp: new Date().toISOString(),
  message: "Server is healthy"
}));
//
app.use

// routes
app.use('/api/v1/books', bookRoutes);
app.use('/api/v1/authors', authorRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});