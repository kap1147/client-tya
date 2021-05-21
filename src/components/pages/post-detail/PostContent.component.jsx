import React from 'react';
import PriceContent from './PriceContent.component';
//Mui Stuff
import { makeStyles } from '@material-ui/core/styles';
import Tags from './Tags.component';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
  },
  price: {
      flexBasis: '100%',
  },
  point: {
      flexBasis: '100%',
  },
  tags: {
      flexBasis: '100%',

  }
}));

const PostContent = ({post}) => {
    const classes = useStyles();
    const tagsMarkup = post.tags ? <Tags tags={post.tags} /> : <p>...No tags</p>
    return (
        <div className={classes.root}>
            <div className={classes.price}><PriceContent price={post.price}/></div>
            <div className={classes.point}>Point</div>
            <div className={classes.tags}>{tagsMarkup}</div>
            <div className={classes.content}>Content</div>
            <div className={classes.map}>Map</div>
        </div>
    )
}
export default PostContent;