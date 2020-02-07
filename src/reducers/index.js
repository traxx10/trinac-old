import { combineReducers } from "redux";
import AppReducer from "./AppReducer";
import HomePageReducer from "./HomePageReducer";
import ReviewsReducer from "./ReviewsReducer";
import PortfolioReducer from "./PortfolioReducer";

export default combineReducers({
  AppReducer,
  HomePageReducer,
  ReviewsReducer,
  PortfolioReducer
});
