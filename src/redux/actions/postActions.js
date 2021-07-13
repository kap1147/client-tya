import axios from "axios";
import { SET_POST } from "../types";

const fetchPosts = (coord) => (dispatch) => {
  if (coord.length === 0) return;
  axios.post("https://theyardapp.com/api/posts/home", {lat: coord.lat, lon: coord.lon}).then((res) => {
    dispatch({ type: SET_POST, payload: res.data });
  });
};

const fetchPost = (id) => async  (dispatch) => {
  try {
    const results = await axios.get(`https://theyardapp.com/api/posts/${id}`);
    return(results.data);
  } catch(err) {
    console.log(err)
  }
}

const createBid = (data, id) => async (dispatch) => {
  try{
    const results = await axios.post(`https://theyardapp.com/api/posts/${id}/bid`, data);
    return results.data;
  }catch(err){
    console.log(err);
  }
}

export default { fetchPosts, fetchPost, createBid };
