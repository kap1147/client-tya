import { Link } from "react-router-dom";
// MUI Stuff
import { CardActionArea, makeStyles, Paper, Typography  } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
      gridRow: 'span 1/span 1',
      width: '100%',
      display: 'flex',
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: '#00a87e',
      cursor: 'pointer',
      transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      textDecoration: 'none'
    },
    imageContainerWrapper: {
      width: '100%',
      position: 'relative',
      color: '#00a87e',
    },
    imageConatiner: {
      paddingBottom: '100%',
      display: 'block',
      overflow: 'hidden',
      position: 'relative',
      color: '#00a87e',
    },
    image: {
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      bottom: 0,
      height: '100%',
      display: 'flex',
      position: 'absolute',
      objectFit: 'cover',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fafafa',
      color: '#00a87e',
    },
    infoWrapper: {
      overflow: 'hidden',
      width: '100%',
      height: '56px',
      display: 'flex',
      padding: '6px 0px 2px',
      flexDirection: 'column',
      [theme.breakpoints.up('sm')]: {
        padding: '8px 5px',
        height: 'initial'
      }
    },
    infoHeader: {
      color: '#121212',
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: 1.5,
      textTransform: 'none'
    },
    infoPriceWrapper: {
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'stretch',
      justifyContent: 'space-between'
    },
    infoPrice: {
      color: '#121212',
      paddingRight: '8px',
    },
    infoLocal: {
      color: '#2f2f2f',
    },
    infoContent: {
      color: '#8e8e8e',
    },
  }));

export default function NewDisplayPost({post}) {
  const classes = useStyles();

  return (
  <CardActionArea component={Link} to={`/posts/${post._id}`}>
   <Paper>
    <a 
      className={classes.root} 
      title={post.author.alias} 
      aria-label={post.author.alias}
      href={post.url}
    >
      <div className={classes.imageContainerWrapper}>
        <div className={classes.imageConatiner}>
          <img className={classes.image} alt={post.author.alias} src={post.photos[0]} />
        </div>
      </div>
      <div className={classes.infoWrapper}>
        <div className={classes.infoPriceWrapper}>
          <Typography className={classes.infoPrice} align='left' variant="body1" noWrap>
            ${post.price}
          </Typography>
        </div>
        <Typography className={classes.infoContent} align='left' variant="body2" noWrap>
          {post.content} 
        </Typography>
        <Typography className={classes.infoLocal} align='left' variant="body2" noWrap>
         {post.city}, {post.state}
        </Typography>

      </div>
    </a>
   </Paper>
  </CardActionArea>
  );
};
