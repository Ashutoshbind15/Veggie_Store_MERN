import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

import productRoutes from "./routes/products.js";

app.use("/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`listening ${process.env.PORT}`);
});
