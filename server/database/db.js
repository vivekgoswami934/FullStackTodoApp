import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = () => {
  const MONGODB_URL = process.env.MONGO_DB_URL;
  mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

  mongoose.connection.on(`disconnected`, () => {
    console.log("Database connected successfully");
  });
  mongoose.connection.on(`disconnected`, () => {
    console.log("Database is disconnected");
  });
  mongoose.connection.on(`error`, () => {
    console.log("Error while connecting with mongodb", error.message);
  });
};

export default Connection;
