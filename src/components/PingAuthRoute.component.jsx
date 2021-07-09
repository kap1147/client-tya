import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../redux/actions/index';

export default function PingAuthRoute(){
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    function handleClick(){
        fetch('https://theyardapp.com/api/auth/ping',{
            headers: {
                'Authorization': `Bearer ${auth.accessToken}`
	    }
	})
	    .then(response => response.json())
	    .then(data => {
                if (!data.success) dispatch(allActions.authActions.handleError(data));
	    })
	    .catch((err) => {
                dispatch(allActions.authActions.handleError(err))
	    });
    };
    const buttonMarkup = auth 
		? <button onClick={handleClick}>PingRoute</button>
		: <p>loading button...</p>
    return buttonMarkup;
};
