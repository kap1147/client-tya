import React from "react";
import { Link } from "react-router-dom";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
// Components
import CustomIcon from "./CustomIcon.component";
// Mui stuff
import {  makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
      
    },
    dollar: {
      maxWidth: "10%",
    }
}));

export default function PostCard({post}) {
  const classes = useStyles();
  const { content, _id, timestamp, price, photos } = post;
  dayjs.extend(relativeTime);

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/posts/${_id}`}>
      {photos.length > 0 ? <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={photos[0]}
          title="Contemplative Reptile"
        />
      : <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://s3-production.bobvila.com/articles/wp-content/uploads/2017/07/level-yard.jpg"
          title="Contemplative Reptile"
        />}
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          <CustomIcon id='dollar' dims={{h:25,w:25}}/>
            {price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            {dayjs(timestamp).fromNow()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
