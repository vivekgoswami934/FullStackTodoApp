import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
const app = express();

const PORT = 8080;
app.use(cors());

app.listen(PORT, async () => {
  await Connection();
  console.log("Your server is running successfully on PORT");
});
