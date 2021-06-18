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

const signoutUser = () => (dispatch) => {
    let accessToken = localStorage.getItem('accessToken');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.clear();
    dispatch({ type: SIGN_OUT});
    fetch("https://theyardapp.com/api/auth/logout", {
        method: "GET",
        credentials: "include",
        headers: {
            Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
		"Authorization": `Bearer ${accessToken}`
        }
    });
}
	
const getUser = () => (dispatch) => {
    let refreshToken = Cookies.get('refreshToken');
    let accessToken = Cookies.get('accessToken');
    if (refreshToken){
        localStorage.setItem('refreshToken', refreshToken);
        	
        fetch("https://theyardapp.com/api/auth", {
            method: "GET",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
		"Authorization": `Bearer ${accessToken}`
            }
    }).then(response => {
          if (response.status === 200) return response.json();
    }).then(data => {
        if(data.authenticated && data.user) dispatch({ type: SIGN_IN, payload: data.user });
    }).catch((err) => {
        console.log(err)
    })
    };
    if (accessToken){
        localStorage.setItem('accessToken', accessToken);
    };
    
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    signinUser,
    signoutUser,
    getUser
}
