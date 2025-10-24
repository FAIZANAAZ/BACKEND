const express = require('express');
const BookRoutes = require('./routes/book.route');
const app = express();
const port = 8000;

app.use(express.json());
// ye body me data jeson me ata he to osko read krta he or sahi sy return krta he kioky express nhi kr sta body json ko read 

app.use("/books",BookRoutes)



// //////////////////////////////////

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});