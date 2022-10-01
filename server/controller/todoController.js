import TodoModel from "../Model/TodoModel.js";

export const addTodo = async (req, res) => {
  console.log(req.body);
  try {
    const newTodo = await TodoModel.create({
      data: req.body.data,
      createdAt: Date.now(),
    });

    await newTodo.save();

    return res.status(200).json(newTodo);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
