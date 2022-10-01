import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
import route from "./Routes/route.js";
import bodyParser from "body-parser"
const app = express();

const PORT = 8080;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use("/todos", route);

app.listen(PORT, async () => {
  await Connection();
  console.log("Your server is running successfully on PORT 8080");
});
