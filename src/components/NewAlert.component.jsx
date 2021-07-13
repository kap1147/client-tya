import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
// MUI Stuff
import { Avatar, makeStyles, Typography } from "@material-ui/core";
import WhatshotIcon from '@material-ui/icons/Whatshot';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9f5bf',
    height: '50px'
  },
  col1: {
    backgroundColor: '#c2e4a1',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  col2: {
    padding: '0px 5px'
  },
  col3: {
    paddingRight: '5px'
  },
  icon: {
    color: 'red'
  },
}));

export default function NewAlert({alert}) {
  const classes = useStyles();
  dayjs.extend(relativeTime);

  return (
    <div className={classes.root}>
      <div className={classes.col1}>
        <WhatshotIcon className={classes.icon} />
      </div>
      <div className={classes.col2}>
        <div className={classes.row1}>
          <Typography className={classes.info} variant="body1" noWrap>
            {alert.desc} {alert.flag}
          </Typography>
          <Typography className={classes.timestamp} variant="body2" noWrap>
            {dayjs(alert.timestamp).fromNow()}
          </Typography>
        </div>
      </div>
      <div className={classes.col3}>
        <Avatar alt={alert.sender.alias} src={alert.sender.imageURL} />
      </div>
    </div>
  );
}
