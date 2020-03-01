import {
  TOGGLE_SIDE_MENU,
  ON_DIMENSION_CHANGE,
  ON_LOAD_COMPLETE,
  ON_APP_LOADED
} from "../actions/types";

const INITIAL_STATE = {
  sideMenu: false,
  dimension: {},
  isServiceVisible: false,
  isServiceShown: false,
  loadingPage: true,
  onAppLoadComplete: false,
  showingLoader: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return { ...state, sideMenu: action.payload };

    case ON_DIMENSION_CHANGE:
      return { ...state, dimension: action.payload };

    case ON_LOAD_COMPLETE:
      return { ...state, loadingPage: false };

    case ON_APP_LOADED:
      return { ...state, onAppLoadComplete: true };

    default:
      return state;
  }
};
