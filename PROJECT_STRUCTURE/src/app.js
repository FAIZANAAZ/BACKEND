import express from "express";
import cors from "cors";
import healthCheckRoutes from "./routes/health.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";



const app = express();

//middleware to parse cookies from incoming requests
app.use(cookieParser());

app.use(express.json({ limit: "10kb" })); //body parser jo json data ko read krty hen
app.use(express.urlencoded({ extended: true, limit: "10kb" })); //ye isi liye agr url me koi space wagera jo koi special character ho to wo b read kr ly
app.use(express.static("public")); //yani jo bhi static files hen wo public folder sy ly ly iska code change nhi hoga

// CORS Configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// sirf in jhahon sy request a skti he or in methods sy

app.get("/", (req, res) => {
  res.end("hello world");
});

app.use("/api/v1/health", healthCheckRoutes);
app.use("/api/v1/auth", authRoutes);

export default app;
