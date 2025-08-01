import express from 'express';
import userRouter from './routes/user.js';
import hostRouter from './routes/host.js';
const app = express();
app.use(express.urlencoded());
// express.urlencoded() allow karta hai ke Express tumhari form (POST) body ko samajh kar req.body ke through access kar sake. Yeh middleware zaroori hota hai agar tum form data handle kar rahe ho in Express.
app.use(userRouter);
app.use(hostRouter);
// use ka isi liye use krty hen tsky wo sbpr applay ho hr rout pr 
// middleware
app.use((req, res, next) => {
    res.status(404).send("Not Found");
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
