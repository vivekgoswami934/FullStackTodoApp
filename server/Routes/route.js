import express from "express";
import { addTodo } from "../controller/todoController.js";

const route = express.Router();

route.post("/", addTodo);

export default route;
