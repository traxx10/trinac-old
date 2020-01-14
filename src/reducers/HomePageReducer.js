import { TOGGLE_SIDE_MENU } from "../actions/types";

const INITIAL_STATE = {
  sideMenu: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return { ...state, sideMenu: action.payload };
    default:
      return state;
  }
};
