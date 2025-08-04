import express from "express";
const homeRouter = express.Router();
import { home } from "../controllers/home.js";

homeRouter.get("/home", home);

export default homeRouter;