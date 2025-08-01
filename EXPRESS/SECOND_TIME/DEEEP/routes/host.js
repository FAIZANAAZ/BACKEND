import express from "express";
const hostRouter = express.Router();
import path from "path";
import getPath from "../utils/path.util.js";
// same url use krny k eliye ak jga oath dediya or use krliya 
hostRouter.get("/contact", ((req, res, next) => {
    console.log('Request URL:', req.url, req.method);
    res.sendFile(path.join(getPath, 'views', 'host.html'));
}));
hostRouter.post("/contact", ((req, res, next) => {
    console.log(req.body.homename);
    res.sendFile(path.join(getPath, 'views', 'succes.html'));
}));
export default hostRouter;
