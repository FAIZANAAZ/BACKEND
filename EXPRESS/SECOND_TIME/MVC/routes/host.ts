import express from "express";
const hostRouter = express.Router();
import { host, success } from "../controllers/host.js";
// same url use krny k eliye ak jga oath dediya or use krliya 





hostRouter.get("/contact",host);



hostRouter.post("/contact",success);
export default hostRouter;

