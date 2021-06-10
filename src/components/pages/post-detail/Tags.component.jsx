import React from 'react';
// Components
import CustomIcon from '../../CustomIcon.component';
//Mui Stuff
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexBasis: '50%',
    padding: '5px 0 5px 0',
  },
  icon: {
      paddingRight: 10,
  },
  title: {
      
  },
  description: {
    display: 'none',
  }
}));

const Tags = (props) => {
    const classes = useStyles();
    const tagMarkup = props.tags.map(tag =>
                <div className={classes.root}>
                    <div className={classes.icon}><CustomIcon id={tag.icon} dims={{h: 25, w:25}}/></div>
                    <div className={classes.title}><Typography variant='h6'>{tag.title}</Typography></div>
                    <div className={classes.description}>{tag.description}</div>
                </div>)
    console.log(props.tag);
    return tagMarkup;
    
}

export default Tags;