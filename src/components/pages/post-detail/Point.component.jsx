import React from 'react';

import Axios from 'axios';

import LocationOnIcon from '@material-ui/icons/LocationOn';

const Point = ({location}) => {
    const [state, setState] = React.useState("");

    React.useEffect(() => {
    if (location) {
      const uri = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coordinates[1]},${location.coordinates[0]}&key=AIzaSyBnfJlQJjo4xONgr6H2LuO6f3SDxqnXWio`;
      Axios({
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
        setState({city: data[1].slice(0, -1), state: data[2].slice(0, -1)})
      });
    }
  }, [location]);
  return (
      <div className='point'><span><LocationOnIcon/></span>{state.city}, {state.state}</div>
  )
};

export default Point;