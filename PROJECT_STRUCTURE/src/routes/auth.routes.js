import express from "express";
import { registerUser,login , verifyEmail,logout} from "../controllers/auth.controllers.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = express.Router();
//local host:8000/api/v1/auth/register=sign up route
router.route("/register").post(registerUser);// register controller

//local host:8000/api/v1/auth/login= login route
router.route("/login").post(login); // Add login controller here

// verify email route
router.route("/verify-email/:verificationToken").get(verifyEmail); // Add verify email controller here

router.route("/logout").post( verifyJWT,logout); //user logout route

export default router;