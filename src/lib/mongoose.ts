import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URI;

const connectMongoDB = async () => {
  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }

  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(mongoUri, {
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectMongoDB;
