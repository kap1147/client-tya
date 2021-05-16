import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

const StyledButton = withStyles({
    root: {
      textTransform: 'none'
  }
})(Button);


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <StyledToolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">TheYardApp</Link>
          </Typography>
          <StyledButton color="inherit"><Link to="/about">AboutUs</Link></StyledButton>
          <StyledButton color="inherit"><Link to="/contact">ContactUs</Link></StyledButton>
          <StyledButton color="inherit"><Link to="/signin">SignIn</Link></StyledButton>
        </StyledToolbar>
      </AppBar>
    </div>
  );
}