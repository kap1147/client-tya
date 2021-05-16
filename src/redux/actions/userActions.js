import {SIGN_IN, SIGN_OUT} from "../types";

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
    window.open("https://theyardapp.com/api/auth/logout", "_self");
    dispatch({ type: SIGN_OUT});
}

const getUser = () => (dispatch) => {
    fetch("https://theyardapp.com/api/auth", {
            method: "GET",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
    }).then(response => {
          if (response.status === 200) return response.json();
    }).then(data => {
        if(data.authenticated && data.user) dispatch({ type: SIGN_IN, payload: data.user });
    }).catch((err) => {
        console.log(err)
    })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    signinUser,
    signoutUser,
    getUser
}
