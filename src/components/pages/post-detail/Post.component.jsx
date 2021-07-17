import React from 'react';
import './post.styles.scss';
// Components
import ImageContainer from '../../ImagePreview.component';
import PostContent from './PostContent.component';
import GoogleMapComponent from '../../GoogleMap.component';
import Point from './Point.component';
import Tags from './Tags.component';
import PriceWrapper from '../../PriceWrapper.component';
import ProfileCard from '../../ProfileCard.component';
// 3rd party
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
// Mui stuff
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const Post = ({post}) => {
    dayjs.extend(relativeTime);
    const imageContainerMarkUp = post.photos ? <ImageContainer post={post} /> : <p>...loading images</p>;
    const content = post ? <PostContent post={post} /> : <p>...loading content</p>
    const mapMarkup = post.location 
    ? <div className="mapWrapper">
      <GoogleMapComponent position={{lng: post.location.coordinates[0],lat: post.location.coordinates[1]}}></GoogleMapComponent><Typography>Locations are approximate to protect user's privacy.</Typography></div> 
    : <p>...Loading</p>
    const postMarkup = post ?  
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
            <div className="point"><Point state={post.state} city={post.city} /></div>
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
      <div id="profile"><ProfileCard user={post.author}/></div>
    </div>
    : <p>Loading Post</p>
    return postMarkup;
}

export default Post;
