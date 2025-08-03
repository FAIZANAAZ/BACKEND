import express from 'express';
import userRouter from './routes/user.js';
import hostRouter from './routes/host.js';
import getPath from "./utils/path.util.js";
import path from "path";
import homeRouter from './routes/home.js';
const app = express();
app.set('view engine', 'ejs');
app.set('views', "views");
// ye hmny btaya he ke hmari html ki files views ke folder me hen kioky hm ejs ko html ki hi files me as a engine use krty hen 
////////////////////////////////////
app.use(express.urlencoded());
// express.urlencoded() allow karta hai ke Express tumhari form (POST) body ko samajh kar req.body ke through access kar sake. Yeh middleware zaroori hota hai agar tum form data handle kar rahe ho in Express.
app.use(userRouter);
app.use(hostRouter);
app.use(homeRouter);
// use ka isi liye use krty hen tsky wo sbpr applay ho hr rout pr 
// middleware
// kisi file ko public krny ke liye 
app.use(express.static(path.join(getPath, 'public')));
// agr hm esy nhi krengy to css ka link deny ke bawajood css ki file html me connect nhi ho paygi
//////////////////////////////////
app.use((req, res, next) => {
    res.status(404).send("Not Found");
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
