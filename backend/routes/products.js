import express from "express";
import { getAll } from "../controllers/products.js";

const router = express.Router();

router.get("/", getAll);

export default router;