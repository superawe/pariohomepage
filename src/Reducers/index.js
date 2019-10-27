import { combineReducers } from "redux";
import dom from "./Dom";
import burger from "./Burger";
const rootReducer = combineReducers({
  burger,
  dom
});
export default rootReducer;
