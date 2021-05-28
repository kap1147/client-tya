import React from 'react';
// Mui stuff
import {  makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      boxSizing: 'border-box',
    },
    bar: {
        background: `url('https://assets.offerup.com/web/images/price-tag.e9a52d13.png') no-repeat`,
        backgroundSize: '36px 160px',
        overflow: 'hidden',
        backgroundPosition: '-0px -0px',
        width: 36,
        height: 40,
        display: 'none',
    },
    dot: {
        background: `url('https://assets.offerup.com/web/images/price-tag.e9a52d13.png') no-repeat`,
        backgroundSize: '36px 160px',
        overflow: 'hidden',
        backgroundPosition: '-0px -120px',
        width: 19,
        height: 40
    },
    price: {
        fontSize: '1.2em',
        lineHeight: '40px',
        padding: '0 8px',
        fontWeight: 700,
        whiteSpace: 'noWrap',
        backgroundColor: '#00ab80',
        color: 'white',
    },
    tail: {
        background: `url(https://assets.offerup.com/web/images/price-tag.e9a52d13.png) no-repeat;`,
        backgroundSize: '36px 160px',
        overflow: 'hidden',
        backgroundPosition: '-19px -120px',
        width: 16,
        height: 40,
    }
}));

const PriceWrapper = ({price}) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.bar} />
            <div className={classes.dot} />
            <div className={classes.price}>${price}</div>
            <div className={classes.tail} />
        </div>
    )
}

export default PriceWrapper;
