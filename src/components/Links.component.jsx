import { Link } from 'react-router-dom';
// MUI Stuff
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  linksWrapper: {
    display: "flex",
    height: "75px",
    alignItems: "center"
  },
  link: {
    padding: "0px 5px",
    "&:hover": {
      cursor: "pointer"
    }
  }
}));

export default function Links() {
  const classes = useStyles();
  return (
    <div className={classes.linksWrapper}>
      <div className={classes.link}>About</div>
      <div className={classes.link}>Help</div>
      <div className={classes.link}><Link to="/signin">SignIn</Link></div>
    </div>
  );
}