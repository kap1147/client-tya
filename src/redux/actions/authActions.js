import {
	SET_AUTH, 
	CLEAR_AUTH, 
	SET_REFRESH_TOKEN, 
	SET_ACCESS_TOKEN
} from '../types';

const isAuthenticated = (flag) => (dispatch) => {
    switch (flag) {
        case true:
            dispatch({type: SET_AUTH, payload: true});
	    break;
        case false:
	    dispatch({type: CLEAR_AUTH});
	    break;
        default:
	    break;
    };
};

const setToken = (token, flag) => (dispatch) => {
    switch (flag) {
        case 'a':
            dispatch({type: SET_ACCESS_TOKEN, payload: token});
	    break;
        case 'r':
	    dispatch({type: SET_REFRESH_TOKEN, payload: token});
	    break;
	default:
	    break;
    };
};

const clearAuth = () => (dispatch) => {
    dispatch({type: CLEAR_AUTH});
};

const getToken = () => (dispatch) => {
    fetch('https://theyardapp.com/api/auth/token')
	.then(response => response.json())
	.then(data => {
            if (data.success) {
                dispatch({type: SET_ACCESS_TOKEN, payload: data.token});
		dispatch({type: SET_AUTH, payload: true});
                return;
	    }
	});
};

export default {
    isAuthenticated,
    setToken,
    getToken,
    clearAuth
};
