import express from "express";
const userRouter = express.Router();
import path from "path";
import getPath from "../utils/path.util.js";
import name from "./host.js"

userRouter.get("/", (req, res, next) => {
   res.render(
     "user"
   )
    
// jb ejs ki file ko bhejty hen to render ka use krty hen send ki jga 
});

export default userRouter;