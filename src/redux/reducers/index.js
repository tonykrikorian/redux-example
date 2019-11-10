import { combineReducers } from "redux";
import courses from "./courseReducer";
import persons from "./personReducer";

const rootReducer = combineReducers({
  courses,
  persons
});

export default rootReducer;
