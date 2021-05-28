import React from 'react';
// 3rd party
import { GoogleMap, withScriptjs, withGoogleMap, Circle  } from "react-google-maps";

const GoogleMapWrapper = withScriptjs(withGoogleMap((props) => {
  let options = { 
      mapTypeControl: false, 
      panControl: false, 
      streetViewControl: false, 
      zoomControl: false, 
      draggable: false
    };

   let circleOptions = {
       fillColor: "#66bb6a",
       fillOpacity: '.2',
       strokeColor: "#66bb6a",
       strokeOpacity: 0
   }
  return(
    <GoogleMap
      defaultZoom={13}
      defaultCenter={props.position}
      options={options}
    >
      {props.isMarkerShown && <Circle  options={circleOptions} radius={3000} defaultCenter={props.position} />}
    </GoogleMap>
  )
}));

const GoogleMapComponent =({position}) => {
    return (
        <GoogleMapWrapper
            isMarkerShown
            position={position}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBnfJlQJjo4xONgr6H2LuO6f3SDxqnXWio"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px`,  display: 'flex' }} />}
            mapElement={<div style={{ height: `100%`, width: '100%' }} />}
        />
    )
};

export default GoogleMapComponent;
