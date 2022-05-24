import express from "express";
import {
  getAll,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} from "../controllers/products.js";
import auth from "../middleware/auth.js";
import verifyRoles from "../middleware/verifyRoles.js";

const router = express.Router();

router.get("/", getAll);
router.post("/", auth, verifyRoles(2002, 2003, 2001), createProduct);
router.get("/:id", getProduct);
router.patch("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);

export default router;
