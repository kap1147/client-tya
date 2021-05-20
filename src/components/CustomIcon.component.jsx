import React from 'react';
// Mui stuff
import { Icon, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mySvgStyle: {
    fillColor: '#fff'
  },
}))

const CustomIcon = ({id, dims}) => {

  const classes = useStyles();

  return(
    <Icon className={classes.mySvgStyle}>
        <img src={`https://theyardapp.com/svgs/${id}.svg`} alt={id} height={dims.h} width={dims.w}/>
   </Icon>
  )
}

export default CustomIcon;
