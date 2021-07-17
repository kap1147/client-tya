import { useState } from 'react';
import { Link } from 'react-router-dom';
// Redux
import { useSelector, useDispatch } from "react-redux";
import allActions from '../redux/actions'
// Components
import AuthLinks from './AuthLinks.component';
import FormLocation from './FormLocation.component';
import Links from './Links.component';
// MUI Stuff
import { AppBar, Grid, IconButton, InputBase, makeStyles, Paper, TextField } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles(theme => ({
  root: {  
    backgroundColor: '#fff',
    color: '#3aa0b0',
    boxShadow: 'none',
    top: 'auto'
  },
  toolbarWrapper: {
    width: '100%',
    maxWidth: '1600px',
    flexDirection: 'column',
    margin: '0px auto',
    padding: '0px 24px',
  },
  toolbar: {
    padding: '16px 0px',
  },
  logoWrapper: {
    width: '175px',
  },
  searchContainer: {
    maxWidth: '400px',
    display: 'flex'
  },
  formWrapper: {
    display: 'flex',
    border: '1px solid #3aa0b0',
    borderRadius: '3px 0px 0px 3px',
    flex: 1,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: '#3aa0b0',
    bottomBorder: 0,
   	"& > *": {
	  "&::before": {
        borderBottom: 'none',
      }
    }
  },
  iconButton: {
    width: '40px',
    minWidth: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: '0px 3px 3px 0px',
    backgroundColor: '#3aa0b0'
  },
  linksContainer: {
    color: 'black'
  },
  local: {
    display: 'flex',
    alignItems: 'center'
  }
}));

export default function Navbar() {
  const query = useSelector((state) => state.query);
  const { authenticated } = useSelector((state) => state.auth);
  const [ value, setValue ] = useState({});
  const dispatch = useDispatch();
  const classes = useStyle();
  
  function handleChange(event) {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  function handleClick(event) {
      dispatch(allActions.queryActions.setQuery({...value.search}));
  };

  return (
    <AppBar 
      className={classes.root}
      position='fixed' 
    >
      <div className={classes.toolbarWrapper}>
        <Grid 
          className={classes.toolbar} 
          alignContent='space-between' 
          alignItems='center'
          wrap='nowrap'
          justify='space-between'
          container
        >
          <Grid item xs>
            <Grid container spacing='2' wrap='nowrap' alignItems='center'>
              <Grid className={classes.logoWrapper} item>
                <h3><Link to='/'>TheYardApp</Link></h3>
              </Grid>
              <Grid className={classes.searchContainer} item xs>
                <Paper component='form' className={classes.formWrapper} elevation={0}>
                  <TextField
        value={value}
        onChange={handleChange}
        name="search"
        className={classes.input}
        id="search"
        InputProps={{
          inputComponent: FormLocation,
          'aria-label': 'Search'
        }}
      />
                  
                </Paper>
                <IconButton type="submit" className={classes.iconButton} aria-label="submit" onClick={handleClick}>
                    <SearchIcon />
                  </IconButton>
              </Grid>
              <Grid item xs>
                <p className={classes.local}><LocationOnIcon />
 					{query.city ? <h5>{query.city}, {query.state}</h5> : <h5>No loaction set!</h5>}
				</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs='auto'>
            <Grid className={classes.linksContainer} container spacing='3' wrap='nowrap' justifyFlex='flex-end'>
				  { authenticated ? <AuthLinks /> : <Links />}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </AppBar>
  );
};
