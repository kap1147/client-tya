import React from 'react';
// Mui stuff
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import { Opacity } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  imgRowContianer: {
    maxHeight: '390px',
    height: 'auto%',
    backgroundSize: 'cover',
    position: 'relative',
  },
  imgContainer: {
      flexWrap: 'nowrap',
      overflow: 'hidden',
  },
  image: {
    height: 'auto',
    maxHeight: '385px',
    width: '100%',
    maxWidth: 500,
    marginRight: 10,
    cursor: 'pointer',
    position: 'relative',
    zIndex: 3,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    background: '#000',
    opacity: .7,
    position: 'absolute',
    zIndex: 2,
  },
}));

const ImageContainer = (props) => {
    const {post} = props;
    const classes = useStyles();

    return (
        <Grid className={classes.imgRowContianer} item xs={12} container style={{padding: 0, backgroundImage: `url(${post.photos[0]})`}} >
          <div className={classes.wrapper} />
            <Grid className={classes.imgContainer} item xs={12} container direction="row" justify="center" alignItems="center">
            { post.photos.map(image => <img className={classes.image} onClick={() => console.log('clicked')} alt={post.author} src={image} />)}
            </Grid>
        </Grid>        
    )
};

export default ImageContainer;
