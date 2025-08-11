import express from "express";
import { user } from "../controllers/user.js";
const userRouter = express.Router();


userRouter.get("/", user);

export default userRouter;