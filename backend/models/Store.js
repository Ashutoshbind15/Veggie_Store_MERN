import mongoose from "mongoose";

const storeSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
});

export default mongoose.model("Store", storeSchema);
