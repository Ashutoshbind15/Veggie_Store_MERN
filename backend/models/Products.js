import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  name: String,
  price: Number,
  qty: Number,
  description: String,
  image: String,
  farm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Farm",
  },
});

export default mongoose.model("Product", ProductSchema);
