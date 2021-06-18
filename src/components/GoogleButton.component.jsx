import React from 'react';

export default function GoogleButton(){
  function handleClick(e){
    e.preventDefault();
    window.open("https://theyardapp.com/api/auth/google/auth", "_self");
  };
  return (
    <button onClick={handleClick}>GoogleLogin</button>
  )
};
