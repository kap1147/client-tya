import AuthLinks from './AuthLinks.component';
import Links from './Links.component';
// Redux
import { useSelector } from "react-redux";
// MUI Stuff
import { AppBar, Grid, InputBase, IconButton, Paper, makeStyles} from "@material-ui/core";
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
    color: '#3aa0b0'
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
  const classes = useStyle();
  if (authenticated) console.log('isAuthenticated: ', authenticated );

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
                <h3>TheYardApp</h3>
              </Grid>
              <Grid className={classes.searchContainer} item xs>
                <Paper component='form' className={classes.formWrapper} elevation={0}>
                  <InputBase
                    className={classes.input}
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'search posts' }}
                  />
                  
                </Paper>
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
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