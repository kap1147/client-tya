import { SET_QUERY } from "../types";
const setQuery = (coordinates) => (dispatch) => {
  dispatch({ type: SET_QUERY, payload: coordinates });
};

export default {setQuery}
