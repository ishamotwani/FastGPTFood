import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("connected successfully to database.");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); //1 means exit with failure
  }
};
