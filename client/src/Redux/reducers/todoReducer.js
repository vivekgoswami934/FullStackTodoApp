import { ADDNEW_TODO } from "../actions/actionType";

export const todoReducers = (state, action) => {
  switch (action.type) {
    case ADDNEW_TODO:
      return [action.payload, ...state];

    default:
      return [];
  }
};
