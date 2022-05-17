import express from "express";
import {
  getAll,
  createStore,
  updateStore,
  deleteStore,
  getStore,
} from "../controllers/stores.js";

const router = express.Router();

router.get("/", getAll);
router.post("/", createStore);
router.get("/:id", getStore);
router.patch("/:id", updateStore);
router.delete("/:id", deleteStore);

export default router;
