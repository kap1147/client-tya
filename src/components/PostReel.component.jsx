import { makeStyles } from "@material-ui/core";
import NewDisplayPost from './NewDisplayPost.component';
import Posts from './post';

const useStyles = makeStyles({
  root: {
    padding: '24px 0px',
  },
  mainRow1: {
    margin: '0px auto',
    padding: '0px 24px'
  },
  postsRow: {
    display: 'grid',
    gridGap: '24px',
  },
  loadMoreRow: {
    display: 'flex',
    padding: '24px 0px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  postRowGrid: {
    display: 'grid',
    gridGap: '24px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(177px, 1fr))',
  },
});

export default function PostReel() {
  const classes = useStyles();
  const posts = Posts;
  return (
    <div className={classes.root} >
          <div className={classes.mainRow1}> 
            <>
              <div className={classes.postsRow}>
                <div className={classes.postRowGrid}> 
                   {posts ? posts.map((post) => <NewDisplayPost post={post} />) : <p>loading post...</p>}
                </div>
              </div>
              <div className={classes.loadMoreRow}> </div>
            </>
          </div>
        </div>
  );
};