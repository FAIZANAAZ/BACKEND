import { delete_api, get_api, insert_api, update_api } from "@/app/CONTROLLERS/web/functionapi";
import express from "express";

const router = express.Router();

router.post("/insert", insert_api);

router.get("/get", get_api);

router.put("/put", update_api);

router.delete("/delete", delete_api);


export default router;