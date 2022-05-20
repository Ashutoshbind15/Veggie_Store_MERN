import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  password: String,
  contact: Number,
  email: String,
  roles: {
    User: {
      type: Number,
      default: 2001,
    },
    Editor: Number,
    Admin: Number,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

export default mongoose.model("User", userSchema);
