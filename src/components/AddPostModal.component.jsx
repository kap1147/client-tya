import React from 'react';
import NumberFormatter from './NumberFormatter.component';
import FormLocation from './FormLocation.component';
import {DropzoneDialog} from 'material-ui-dropzone'
import axios from 'axios';
// Mui stuff
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from "@material-ui/core/Grid";



const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
  },
  input: {
    display: 'none',
  },
  search: {
    paddingBottom: 3,
  },
  formControl: {
    margin: theme.spacing(3),
    width: "30%"
  },
  
}));

export default function AddPostModal() {
  const aInitialCheckbox = [
    { id: 0,
      name: 'lawn mowing',
      itemId: '60ac4b61daca4e40628daeef',
      checked: false},
    { id: 1,
      name: 'clean edge',
      itemId: '60b0e32bdaca4e40628daef0',
      checked: false},
    { id: 2,
      name: 'disaster cleanup',
      itemId: '60b0e346daca4e40628daef1',
      checked: false},
    { id: 3,
      name: 'tree pruning',
      itemId: '60b0e34cdaca4e40628daef2',
      checked: false},
    { id: 4,
      name: 'herbicide spray',
      itemId: '60b0e355daca4e40628daef3',
      checked: false},
    { id: 5,
      name: 'bush hog ',
      itemId: '60b0e35cdaca4e40628daef4',
      checked: false},
    { id: 6,
      name: 'tree removal',
      itemId: '60b0e36adaca4e40628daef5',
      checked: false},
    { id: 7,
      name: 'bush trimming',
      itemId: '60b0e37adaca4e40628daef6',
      checked: false},
    { id: 8,
      name: 'landscaping',
      itemId: '60b0e37fdaca4e40628daef7',
      checked: false},
    { id: 9,
      name: 'mulching',
      itemId: '60b0e384daca4e40628daef8',
      checked: false},
    { id: 10,
      name: 'aeration',
      itemId: '60b0e389daca4e40628daef9',
      checked: false},
  ]
  const [open, setOpen] = React.useState(false);
  const [checkboxList, setCheckboxList] = React.useState(aInitialCheckbox);
  const [state, setDropState] = React.useState({open: false, files: [] })
  const classes = useStyles();
  const initialState = {
    price: '',
    content: '',
    search: '',
    files: null
  }
  const [values, setValues] = React.useState(initialState);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(getTags());
    setCheckboxList(aInitialCheckbox);
  };
  const handleSubmit = () => {
    setOpen(false);
    
    postUpload();
    setCheckboxList(aInitialCheckbox);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
   
  };

  const handleCheck = (event) => {
    setCheckboxList(prevState => {prevState[event.target.name].checked = event.target.checked; return [...prevState]});
  };

  function clearImage(key){
    
    setValues(prevState => {
      return {...prevState, files: ''}
     } )
  }
  function getTags(){
    let tags = [];
    checkboxList.forEach(tag => tag.checked ? tags.push(tag.itemId): null)
    return tags
  }

  function postUpload(){
    let token = localStorage.getItem('IdToken')
    let headers = { Authorization: token, "content-type": 'multipart/form-data' };
    const formData = new FormData();
    let tags = getTags();
    if (tags.length) formData.append('tags', tags);
    if (values.files) formData.append('images', values.files[0]);
    formData.append('price', values.price);
    formData.append('content', values.content);
    formData.append('lng', values.search.lng);
    formData.append('lat', values.search.lat);
    axios.post("httpS://theyardapp.com/api/posts", formData , { headers })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    setValues(initialState);
  }

  function handleDropzoneClose() {
    setDropState({...state, open: false})
  }

  function handleDropzoneSave(files) {
    setValues({...values, files: files});
    setDropState({files: files, open: false});
    
  }

  function handleDropzoneOpen() {
    setDropState({...state, open: true})
  }

  return (
    <Grid item className={classes.root} xs={12}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} fullWidth	>
        Create Post
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Local contractors will immediatly be notified of your post!
          </DialogContentText>
          <FormControl variant="outlined" fullWidth   >
          <InputLabel id="select-label">Property Type</InputLabel>
          <Select
          className={classes.select}
          labelId="select-label"
          label="Property Type"
          id="select"
          value={state.propertyType}
          onChange={handleChange}
        >
          <MenuItem value={'Private Business'}>Private Business</MenuItem>
          <MenuItem value={'Government'}>Government</MenuItem>
          <MenuItem value={'Residential'}>Residential</MenuItem>
        </Select>
  </FormControl>

          <TextField
            variant="outlined"
            value={values.content}
            autoFocus
            margin="dense"
            name="content"
            multiline
            rows={4}
            onChange={handleChange}
            id="content"
            label="Desrciption..."
            type="text"
            fullWidth
          />
          <TextField
          variant="outlined"
        label="$"
        value={values.price}
        onChange={handleChange}
        name="price"
        size="small"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatter,
        }}
      />
      <br />
      <TextField
        value={values.search}
        onChange={handleChange}
        name="search"
        className={classes.search}
        id="search"
        InputProps={{
          inputComponent: FormLocation,
        }}
      />
      <br /><br />
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
        {checkboxList.filter(tag => tag.id < 5).map(tag => (<FormControlLabel
            control={<Checkbox checked={tag.checked} color='primary' onChange={handleCheck} name={tag.id} />}
            label={tag.name}
          />))}
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
        {checkboxList.filter(tag => tag.id >= 5).map(tag => (<FormControlLabel
            control={<Checkbox checked={tag.checked} color='primary' onChange={handleCheck} name={tag.id} />}
            label={tag.name}
          />))}
        </FormGroup>
      </FormControl>

        <Button color='primary' onClick={handleDropzoneOpen}>
                  Add Image
                </Button>
        <DropzoneDialog
                    open={state.open}
                    onSave={handleDropzoneSave}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={handleDropzoneClose}
                />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
