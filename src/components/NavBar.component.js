import React from 'react'
import { Link } from 'react-router-dom'
// Redux
import { useDispatch ,useSelector } from "react-redux";
import allActions from '../redux/actions/index';
// Mui stuff
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0 150px 0 150px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const StyledToolbar = withStyles({
    gutters: {
      padding: '0 350px 0 350px'
  }
})(Toolbar);

export default function NavBar() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const classes = useStyles();

    const _handleSignout = () => {
        dispatch(allActions.userActions.signoutUser())
    }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <StyledToolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">TheYardApp</Link>
          </Typography>
          {user.authenticated && user.user ? 
            <Button onClick={_handleSignout} color="inherit">SignOut</Button> :
            <Button color="inherit"><Link to="/signin">SignIn</Link></Button>
          }
          
        </StyledToolbar>
      </AppBar>
    </div>
  );
}
