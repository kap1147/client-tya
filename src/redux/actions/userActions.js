import api from '../../api';
import {SIGN_IN, SIGN_OUT} from "../types";
import Cookies from 'js-cookie';

const signinUser = (flag) => {
    switch (flag){
        case 'google':
            window.open("https://theyardapp.com/api/auth/google", "_self");
            break;
        case 'facebook':
            window.open("https://theyardapp.com/api/auth/facebook", "_self");
            break;
        default: 
            return null;
    }; 
};

const signoutUser = (token) => (dispatch) => {
    console.log(token);
    fetch("https://theyardapp.com/api/auth/logout", {
        method: "GET",
        credentials: "include",
        headers: {
            Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
		"Authorization": `Bearer ${token}`
        }
    }).then(response => {
        dispatch({ type: SIGN_OUT});
    });
}
	
const getUser =  () => async (dispatch) => {
  try {
    var res = await api.getUser();
    console.log(res.data.user);
    if (res.data.user) {
      dispatch({type: SIGN_IN, payload: res.data.user});
    }
  } catch(err) {
    console.error(err);
  };
};

//const getUser = (token) => (dispatch) => {
//    if (token){
//        fetch("https://theyardapp.com/api/auth", {
//            method: "GET",
//            credentials: "include",
//            headers: {
//                Accept: "application/json",
//                "Content-Type": "application/json",
//                "Access-Control-Allow-Credentials": true,
//		"Authorization": `Bearer ${token}`
//            }
//        }).then(response => {
//            if (response.status === 200) return response.json();
//        }).then(data => {
//            if(data.authenticated && data.user) dispatch({ type: SIGN_IN, payload: data.user });
//        }).catch((err) => {
//            console.log(err)
//        })
//    };
//    
//}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    signinUser,
    signoutUser,
    getUser
}
