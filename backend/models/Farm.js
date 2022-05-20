import mongoose from "mongoose";

const FarmSchema = mongoose.Schema({
  name: String,

  description: String,
  image: String,
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Farm", FarmSchema);
