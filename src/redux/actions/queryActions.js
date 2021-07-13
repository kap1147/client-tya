import axios from 'axios';
import { SET_QUERY } from "../types";

const setQuery = (coordinates) => (dispatch) => {
  const uri = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=AIzaSyBnfJlQJjo4xONgr6H2LuO6f3SDxqnXWio`;
      axios({
        method: "get",
        url: uri,
        transformRequest: [
          (data, headers) => {
            delete headers.common.Authorization;
            return data;
          },
        ],
      }).then((res) => {
        let data = res.data.plus_code.compound_code.split(" ");
		
		let payload = {
		  lon: coordinates.lng,
          lat: coordinates.lat,
          city: data[1].slice(0, -1),
		  state: data[2].slice(0, -1)
		};
		console.log('payload: ', payload);
		dispatch({ type: SET_QUERY, payload: payload });
      });
};

export default {setQuery}
