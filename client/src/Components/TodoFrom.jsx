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
    setText("")
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter new Todo..."
        className="input"
        onChange={onInputChange}
        value={text}
      />
    </form>
  );
};

export default TodoFrom;
