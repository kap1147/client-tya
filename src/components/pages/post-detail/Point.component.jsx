import React from 'react';
// 3rd party
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Point = ({state, city}) => {

  return (
      <div className='point'><span><LocationOnIcon/></span>{city}, {state}</div>
  )
};

export default Point;
