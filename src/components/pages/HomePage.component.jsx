import { makeStyles, CssBaseline, Grid, Typography } from "@material-ui/core";
// Components
import Navbar from '../Navbar.component';
import PostReel from '../PostReel.component';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
  },
  main: {
    maxWidth: '1600px',
    width: '100%',
    margin: '0px auto',
    paddingTop: '70px'
  },
  mainRow1: {
    margin: '0px auto',
    padding: '0px 24px'
  },
  header: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    paddingTop: '24px',
    justifyContent: 'center'
  },
  headerTitle: {
    color: '#00a87e',
    fontSize: '1.25rem',
    fontWeight: 900,
    lineHeight: '1.25rem',
    marginRight: '16px',
  
  },
});

export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <CssBaseline />
      <main className={classes.main}> 
        <div className={classes.mainRow1} >
          <Grid className={classes.header}>
            <Grid item >
              SVG
            </Grid>
            <Grid item >
              <Typography className={classes.headerTitle} align='left' variant="h3" noWrap>
                The simpler way to buy and sell locally!
              </Typography>
            </Grid>
            <Grid item >
              SVG
            </Grid>
          </Grid>
        </div>
        <PostReel />
        <div className={classes.mainRow1} >
          <h4>Main Row 3</h4>
        </div>
      </main>
    </div>
  );
}