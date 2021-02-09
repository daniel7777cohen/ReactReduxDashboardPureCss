import { combineReducers } from "redux";
import trsReducer from "./trsReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  trs: trsReducer,
  alerts: alertReducer,
});
