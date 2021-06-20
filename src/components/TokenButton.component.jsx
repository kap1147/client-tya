import React from 'react';

export default function TokenButton(){
    function handleClick(e){
        e.preventDefault();
	fetch("https://theyardapp.com/api/auth/token", {
        method: "GET",
        credentials: "include",
        headers: {
            Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
        }
    });
    };
    return (
        <button onClick={handleClick}>
            Get Token
	</button>
    );
};
