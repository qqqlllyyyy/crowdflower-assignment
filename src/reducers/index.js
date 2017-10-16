import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import errorsReducer from "./errorsReducer";

// The keys passed into the 'combineReducers' will be the keys of our state.
export default combineReducers({
  tasks: tasksReducer,
  errors: errorsReducer
});
