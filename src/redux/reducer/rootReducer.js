import { combineReducers } from "redux";
import bugerReducer from "./bugerReducer";
import { toDoListReducer } from "./ToDoListReducer";

const rootReducer = combineReducers({
  bugerReducer: bugerReducer,
  toDoListReduccer: toDoListReducer,
});

export default rootReducer;
