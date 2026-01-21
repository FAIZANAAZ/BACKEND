import express from "express";
import { registerUser } from "../controllers/auth.controllers.js";
import { login } from "../controllers/auth.controllers.js";

const router = express.Router();
//local host:8000/api/v1/auth/register=sign up route
router.route("/register").post(registerUser);// register controller

//local host:8000/api/v1/auth/login= login route
router.route("/login").post(login); // Add login controller here

export default router;