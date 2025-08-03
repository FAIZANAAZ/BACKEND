import express from "express";
const userRouter = express.Router();
userRouter.get("/", (req, res, next) => {
    res.render("user");
    // jb ejs ki file ko bhejty hen to render ka use krty hen send ki jga 
});
export default userRouter;
