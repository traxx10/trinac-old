import {
  TOGGLE_SIDE_MENU,
  ON_DIMENSION_CHANGE,
  ON_LOAD_COMPLETE
} from "../actions/types";

const INITIAL_STATE = {
  sideMenu: false,
  dimension: {},
  isServiceVisible: false,
  isServiceShown: false,
  loadingPage: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return { ...state, sideMenu: action.payload };

    case ON_DIMENSION_CHANGE:
      return { ...state, dimension: action.payload };

    case ON_LOAD_COMPLETE:
      return { ...state, loadingPage: false };

    default:
      return state;
  }
};
