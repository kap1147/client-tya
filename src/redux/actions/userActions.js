import {SIGN_IN} from "../types";

const singinUser = () => (dispatch) => {
   window.open("https://theyardapp.com/api/auth/google", "_self");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    singinUser
}