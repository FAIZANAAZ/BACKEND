import { Request, Response, NextFunction } from "express";
import { HomeClass } from "../models/homem.js";


export const home = (req: Request, res: Response, next: NextFunction) => {
   // Example array, replace as needed

  // Callback use karo
  HomeClass.fetchAll((data: any[]) => {
    res.render("home", { DATA: data });
  });
}

