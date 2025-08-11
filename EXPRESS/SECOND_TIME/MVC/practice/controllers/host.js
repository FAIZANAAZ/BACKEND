import express from "express";
const hostRouter = express.Router();
import path from "path";
import getPath from "../utils/path.util.js";
import { HomeClass } from "../models/homem.js";
// same url use krny k eliye ak jga oath dediya or use krliya 
export const host = ((req, res, next) => {
    console.log('Request URL:', req.url, req.method);
    res.sendFile(path.join(getPath, 'views', 'host.html'));
});
export const success = ((req, res, next) => {
    // console.log(req.body);
    const newhome = new HomeClass(req.body.homename);
    newhome.save();
    res.sendFile(path.join(getPath, 'views', 'succes.html'));
});
