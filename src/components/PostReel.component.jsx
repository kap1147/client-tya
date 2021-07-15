import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
// Components
import NewDisplayPost from './NewDisplayPost.component';

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
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className={classes.root} >
          <div className={classes.mainRow1}> 
            <>
              <div className={classes.postsRow}>
                <div className={classes.postRowGrid}> 
                   {posts.length ? posts.map((post) => <NewDisplayPost post={post} />) : <p>No post found...</p>}
                </div>
              </div>
              <div className={classes.loadMoreRow}> </div>
            </>
          </div>
        </div>
  );
};
