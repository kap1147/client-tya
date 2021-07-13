import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// Mui stuff
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


export default function DisplayPost({post}) {
  console.log(post);
  dayjs.extend(relativeTime);
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'flex',
      padding: '20px 0 20px 0',
      width: '900px'
    },
    image: {
      backgroundImage: `url(${post.photos[0]})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '200px',
      flexBasis: '30%',
    },
    info: {
      flexBasis: '30%',
      alignSelf: 'center',
      textAlign: 'center',
      flex: 1,
    },
    icons: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center',
      flexBasis: '10%'
    },
    infoLine: {
      lineHeight: 2,
    },
  }));

  const classes = useStyles();

  function handleRemovePost(e) {
    e.preventDefault();
    console.log('remove post icon clicked!');
  };

  function handleEditPost(e) {
    e.preventDefault();
    console.log('edit post icon clicked!');
  };
  return (
    <div className={classes.root} >
      <div className={classes.image} />
      <div className={classes.info} >
        <Typography className={classes.infoLine} component="p">
          Bids: {post.bids.length}
        </Typography>
        <Typography className={classes.infoLine} component="p">
          Open Time: {dayjs(post.timestamp).fromNow()}
        </Typography>
        <Typography className={classes.infoLine} component="p">
          price: $ {post.price}
        </Typography>
      </div>     
      <div className={classes.icons} >
        <IconButton
          edge="end"
          aria-label="remove post"
          aria-haspopup="true"
          onClick={handleRemovePost}
          color="inherit"
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="edit post"
          aria-haspopup="true"
          onClick={handleEditPost}
          color="inherit"
        >
          <EditIcon />
        </IconButton>
      </div>
    </div>
  );
};
