import { combineReducers } from "redux";
import AppReducer from "./AppReducer";
import HomePageReducer from "./HomePageReducer";
import ReviewsReducer from "./ReviewsReducer";

export default combineReducers({
  AppReducer,
  HomePageReducer,
  ReviewsReducer
});
