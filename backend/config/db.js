import mongoose from "mongoose";

const connect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoose connected to ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connect;
