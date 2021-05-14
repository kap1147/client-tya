import {SIGN_IN} from "../types";

const singinUser = () => {
   window.open("https://theyardapp.com/api/auth/google", "_self");
};

const getUser = (history) => (dispatch) => {
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
        history.push('/');
    }).catch((err) => {
        console.log(err)
    })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    singinUser,
    getUser
}