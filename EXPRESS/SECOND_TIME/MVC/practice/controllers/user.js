import express from "express";
const userRouter = express.Router();
export const user = (req, res, next) => {
    res.render("user");
};
