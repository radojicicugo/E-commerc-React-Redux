import { combineReducers } from "redux";
import basketReducer from "./basketReducer";


export default combineReducers({
   shop: basketReducer
});