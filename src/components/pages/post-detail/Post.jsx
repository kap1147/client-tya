import React from 'react';

import './post.styles.scss';

import ImageContainer from '../../components/ImagePreview';
import PostContent from './PostContent.component';
import GoogleMapComponent from '../../components/GoogleMap';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Point from './Point.component';
import Tags from './Tags.component';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import PriceWrapper from '../../components/PriceWrapper.component';
import Profile from '../../components/Profile/profile.component';

const Post = ({post}) => {
    if(post.tags) console.log(post.tags.length);
    dayjs.extend(relativeTime);
    const imageContainerMarkUp = post.photos ? <ImageContainer post={post} /> : <p>...loading images</p>;
    const content = post ? <PostContent post={post} /> : <p>...loading content</p>
    const mapMarkup = post.location 
    ? <div className="mapWrapper">
      <GoogleMapComponent position={{lng: post.location.coordinates[0],lat: post.location.coordinates[1]}}></GoogleMapComponent><Typography>Locations are approximate to protect user's privacy.</Typography></div> 
    : <p>...Loading</p>
    return (
        <div className="container">
      <div id="imageContainer">{imageContainerMarkUp}</div>
      <div id="ad"><div className="ad">Ad</div></div>
      <div id="content">
        <div className='col-1'></div>
        <div className='col-2'>
            <div className="headerWrapper">
                <div className="price"><PriceWrapper price={post.price} /></div>
                <div className="type">Residential</div>
            </div>
            <div className="point"><Point location={post.location} /></div>
            <div className="timestamp"><AccessTimeIcon style={{'padding-right':'3px'}}/>{dayjs(post.timestamp).fromNow()}</div>
            <hr />
            <div className="tags">{post.tags ? <Tags tags={post.tags}/> : null}</div>
            <hr />
            <div className="description">{post.content}</div>
            <div className="map">{mapMarkup}</div>
            <hr />
            <div className="report">Report Button</div>
        </div>
        <div className='col-3'></div>
      </div>
      <div id="profile"><Profile user={post.author}/></div>
    </div>
  );
}

export default Post;