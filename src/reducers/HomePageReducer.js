import { TOGGLE_SIDE_MENU, ON_DIMENSION_CHANGE } from "../actions/types";

const INITIAL_STATE = {
  sideMenu: false,
  dimension: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return { ...state, sideMenu: action.payload };

    case ON_DIMENSION_CHANGE:
      return { ...state, dimension: action.payload };

    default:
      return state;
  }
};
