import React, { useEffect, useState } from "react";
// 3rd party
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';
import GoogleMapComponent from '../../GoogleMap.component'
// Components
import CustomIcon from '../../CustomIcon.component';
import ImageContainer from '../../ImagePreview.component';
import Navbar from '../../navbar/Navbar.container';
//Mui Stuff
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Divider from '@material-ui/core/Divider';
import Image from 'material-ui-image';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { rgbToHex, Typography } from "@material-ui/core";
import zIndex from "@material-ui/core/styles/zIndex";


const useStyles = makeStyles((theme) => ({
  root: {
    margin: "75px auto 0 auto",
    padding: 0,
  },
  imgRowContianer: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: "#777",
    position: 'relative',
  },
  'imgRowContainer > *': {
    position: 'relative',
    zIndex: 2,
  },
  img: {
    

    '& > :first-child': {
      marginLeft: 0,
    }
  },
  carousel: {
    borderRadius: 20,
    backgroundColor: '#6666',
  },
  table: {
      backgroundSize: 'cover',
      minHeight: 300,
      width: "100%"
      
  },
  list: {
    width: '50%',
    
  },
  image: {
    maxHeight: 650,
    borderRadius: 20,
  },
  mapContainer: {
    'maxHeight': '100px',
    overflow: 'hidden'
  },
  mapWrapper: {
    width: "100%", 
    height: '100%',
  },
  dollar: {
    paddingTop: 3,
  },
  globeIcon: {
    paddingRight: 5,
  }
}));

function PostDetail({post, google}) {
  const { _id, content, location } = post;
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const classes = useStyles();

  useEffect(() => {
    if (location) {
      const uri = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coordinates[1]},${location.coordinates[0]}&key=AIzaSyBnfJlQJjo4xONgr6H2LuO6f3SDxqnXWio`;
      axios({
        method: "get",
        url: uri,
        transformRequest: [
          (data, headers) => {
            delete headers.common.Authorization;
            return data;
          },
        ],
      }).then((res) => {
        let data = res.data.plus_code.compound_code.split(" ");
        setCity(data[1].slice(0, -1));
        setState(data[2].slice(0, -1));
      });
    }
  }, [location]);

  console.log(process.env.GOOGLE_KEY)

  const carolselMarkup = post.photos ? <div className={classes.carousel}><Carousel autoPlay showStatus={false} showThumbs={false}>{post.photos.map(image => (<div className={classes.imageContainer}>
                    <img className={classes.image} src={image} alt={post.author.username} />
                </div>))}</Carousel></div> : <p>...loading</p>

  const tagMarkup = post.tags ? post.tags.map(tag => <List className={classes.list}>  
                <ListItem>
                  <ListItemIcon>
                    <CustomIcon id={tag.icon} dims={{h: 25, w:25}}/>
                  </ListItemIcon>
                  <ListItemText
                    primary={tag.title}
                    secondary={!tag.description ? tag.description : null}
                  />
                </ListItem>
            </List>) : null

  const mapMarkup = post.location 
    ? <div className={classes.mapWrapper}>
      <GoogleMapComponent position={{lng: post.location.coordinates[0],lat: post.location.coordinates[1]}}></GoogleMapComponent><Typography>Locations are approximate to protect user's privacy.</Typography></div> 
    : <p>...Loading</p>
  
  const headerMarkup = post ? <Grid container item xs={12}><span className={classes.dollar}><CustomIcon id='dollar' dims={{h: 25, w:25}}/></span><Typography variant='h4'>{post.price}</Typography> </Grid> : null

  const subHeaderMarkup = post ? <Grid container item xs={12}><span className={classes.globeIcon}><LocationOnIcon/></span><Typography variant='subtitle1'>{city}, {state}</Typography> </Grid> : null
return (
    <div className={classes.root}>
	<Navbar />
        <Grid container spacing={2} >
            { post.photos
              ? <ImageContainer post={post} />
              : <p>...loading</p>
            }
            <Grid className={classes.contentContainer} item xs={12} container >
               <Grid item container xs={12} sm={8} direction="row" justify="center" alignItems="center">
                  <p>price</p>
               </Grid>
               <Grid item container xs={12} sm={4}>
                  <p>profile</p>
               </Grid>
            </Grid>
        </Grid>
    </div>
  );
}

export default (PostDetail)
