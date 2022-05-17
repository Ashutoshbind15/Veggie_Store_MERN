import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDataBase from "./config/db.js";
import cors from "cors";
const app = express();

connectDataBase();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import productRoutes from "./routes/products.js";
import storeRoutes from "./routes/store.js";
import userRoutes from "./routes/user.js";
app.use("/products", productRoutes);
app.use("/stores", storeRoutes);
app.use("/users", userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening ${port}`);
});
