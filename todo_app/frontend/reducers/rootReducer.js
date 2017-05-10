import {combineReducers} from "redux";
import todosReducer from "./todos_reducer.js";
import stepsReducer from "./steps_reducer";
import errorsReducer from "./error_reducer";
const rootReducer = combineReducers({
  steps: stepsReducer,
  todos: todosReducer,
  errors: errorsReducer
});

export default rootReducer;
