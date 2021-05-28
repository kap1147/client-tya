import React from 'react';
// Mui Stuff
import TextField from '@material-ui/core/TextField';

export default function CreateTag(){
  const [id, setId] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [disc, setDisc] = React.useState('');

  function handleClick(event){
    event.preventDefault();
    if(id.length > 0 && title.length > 0 && disc.length > 0){
      let data = {
        id,
	title,
	disc
      }
      fetch('https://theyardapp.com/api/tag', {
        method: 'POST',
	mode: 'same-origin',
        headers: {
          'Content-type': 'application/json',
	},
	redirect: 'follow',
	body: JSON.stringify(data)
    }).then(response => {
        console.log(response)
      })
    }
  }

  return (
    <>
    <TextField
      id='id'
      label='Id'
      value={id}
      onChange={(event) => setId(event.target.value)}
    />
    <TextField
      id='title'
      label='Title'
      value={title}
      onChange={(event) => setTitle(event.target.value)}
    />
    <TextField
      id='disc'
      label='Description'
      value={disc}
      onChange={(event) => setDisc(event.target.value)}
    />
    <button onClick={handleClick}>Submit</button>
    </>
  );  
}
