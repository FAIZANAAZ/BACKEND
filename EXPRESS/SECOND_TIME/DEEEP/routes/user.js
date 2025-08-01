import express from "express";
const userRouter = express.Router();
import path from "path";
import getPath from "../utils/path.util.js";
userRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(getPath, "user.html"));
});
export default userRouter;
