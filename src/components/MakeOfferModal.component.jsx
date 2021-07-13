import React from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';
// Redux
import allActions from '../redux/actions/index'
import { useSelector, useDispatch } from "react-redux";
// Mui stuff
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
// Components
import TimeInput from './TimeInput.component';
import NumberFormatter from './NumberFormatter.component';

export default function MakeOfferModal(props) {
    const socket = useSelector((state) => state.socket.socket);
    const [state, setState] = React.useState({open: false, selected: null,});
    const [values, setValues] = React.useState({date: new Date(), price: 0});
    const dispatch = useDispatch();
    let location = useLocation();
    let id = location.pathname.split("/")[2];

    function handleOpen(){
        setState({...state, open: true})
    }
    function handleClose() {
        setState({...state, open: false})
    }
    function handleSubmit() {
      let data = {offerDate: values.date, offerPrice: values.price}
      //dispatch(allActions.postActions.createBid(data, id));
      if (socket) {
        data.postId = id;
        socket.emit('addBid', data);
      };
      setState({...state, open: false});
      
    }
    function handleTimeClick(id, value){
      setState({...state, selected: id});
      console.log(value)
      values.date.setHours(value.split(':')[0]);
      values.date.setMinutes(value.split(':')[1]);
    }

    const modalMarkup = state.open ? <Dialog open={state.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Make Offer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Customer will be immediately notified!
          </DialogContentText>
          <FormControl variant="outlined" fullWidth   >
            <DatePicker selected={values.date} onChange={date => setValues({...values, date: date})} minDate={new Date()}  />
          </FormControl>
          <FormControl variant="outlined" fullWidth   >
            <TimeInput selected={state.selected} onClick={handleTimeClick}/>
          </FormControl>
	  <FormControl>
            <TextField
               variant="outlined"
               label="$"
               value={values.price}
               onChange={(e)=> setValues({...values, [e.target.name]: e.target.value})}
               name="price"
               size="small"
               id="formatted-numberformat-input"
               InputProps={{
                 inputComponent: NumberFormatter,
               }}
            />  
	  </FormControl>
          <FormControl>
            <p>{values.date.toString()}</p>
          </FormControl>
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
            : null;
    return (
        <div item className='offer-modal' xs={12}>
            <Button variant='contained' color="primary" onClick={handleOpen} fullWidth	>
                Make Offer
            </Button>
            
            {modalMarkup}
            
        </div>
    )
}
