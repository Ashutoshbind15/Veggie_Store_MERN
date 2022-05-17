import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  name: String,
  price: Number,
  qty: Number,
  description: String,
  image: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Product", ProductSchema);
