import mongoose from "mongoose";

const url = "mongodb://localhost:27017/shop-backend";

export async function dbConnect() {
  try {
    await mongoose.connect(url);
    console.log("Connect to MongoDB");
  } catch (error) {
    console.error("ERRRRRRRROR", error.message);
  }
}
