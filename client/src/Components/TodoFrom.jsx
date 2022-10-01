import { useState } from "react";
import { addNewTodo } from "../Redux/actions";
import { useDispatch } from "react-redux";

const TodoFrom = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(text));
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter new Todo..."
        className="input"
        onChange={onInputChange}
      />
    </form>
  );
};

export default TodoFrom;
