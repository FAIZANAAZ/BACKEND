import { Request, Response, NextFunction } from "express";
import express from "express";
const userRouter = express.Router();


export const user = (req: Request, res: Response, next: NextFunction) => {
   res.render(
     "user"
   )
    
}