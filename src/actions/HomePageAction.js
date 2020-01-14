import { TOGGLE_SIDE_MENU } from "./types";

export const toggleSideMenu = prevState => {
  return dispatch => {
    dispatch({
      type: TOGGLE_SIDE_MENU,
      payload: !prevState
    });
  };
};
