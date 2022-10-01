import axios from "axios";
import { ADDNEW_TODO } from "./actionType";

const BACKEND_URL = "http://localhost:8080";

export const addNewTodo =  (data) => async (dispatch) => {
  try {
   const res = await axios.post(`${BACKEND_URL}/todos`, { data });
       
     dispatch({type:ADDNEW_TODO , payload : res.data})

  } catch (err) {
    console.log("Error while calling addTodo at action", err.message);
  }
};
