import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = async (): Promise<void> => {
  const URL = process.env.URL;
  if (!URL) {
    throw new Error(
      "MongoDB connection URI is missing in environment variables"
    );
  }
  await mongoose
    .connect(URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("error" + error.message));
};
export default db;