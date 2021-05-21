import React from 'react';
//Mui Stuff
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 25,
  },

}));

const PriceContent = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.price}><Typography variant='h5'>${props.price}  Residential</Typography></div>
        </div>
    )
}

export default PriceContent;