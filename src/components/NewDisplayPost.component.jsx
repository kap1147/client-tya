import { makeStyles, Typography  } from "@material-ui/core";

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
        padding: '8px 0px',
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
      color: '#8a8a8a',
    },
  }));

export default function NewDisplayPost({post}) {
  const classes = useStyles();
  return (
    <a 
      className={classes.root} 
      title={post.title} 
      aria-label={post.title}
      href={post.url}
    >
      <div className={classes.imageContainerWrapper}>
        <div className={classes.imageConatiner}>
          <img className={classes.image} alt={post.title} src={post.imageURL} />
        </div>
      </div>
      <div className={classes.infoWrapper}>
        <Typography className={classes.infoHeader} align='left' variant="subtitle1" noWrap>
          {post.title}
        </Typography>
        <div className={classes.infoPriceWrapper}>
          <Typography className={classes.infoPrice} align='left' variant="body1" noWrap>
            ${post.price}
          </Typography>
        </div>
        <Typography className={classes.infoLocal} align='left' variant="body2" noWrap>
          {post.local}
        </Typography>
      </div>
    </a>
  );
};