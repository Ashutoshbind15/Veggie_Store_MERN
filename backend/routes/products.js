import express from "express";
import {
  getAll,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} from "../controllers/products.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAll);
router.post("/", auth, createProduct);
router.get("/:id", getProduct);
router.patch("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);

export default router;
