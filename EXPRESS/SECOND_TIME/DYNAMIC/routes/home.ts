import express from "express";
const homeRouter = express.Router();
import {names} from "./host.js"

homeRouter.get("/home", (req, res, next) => {
  res.render("home",{names});
  // hmny jo ejs me variable ko phonchaya he wo os file ka name hm dengy render me tb wo variable phonchy g ejs me home.ejs ko hm sirf home likhengy 


});

export default homeRouter;