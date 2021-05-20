import React from 'react';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs'
// Mui stuff
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
// Components
import TimeInput from '../TimeInput/TimeInput.component';

export default function MakeOfferModal(props) {
    const [state, setState] = React.useState({open: false, selected: null,})
    const [values, setValues] = React.useState({time: null, date: new Date()})
    function handleOpen(){
        setState({...state, open: true})
    }
    function handleClose() {
        setState({...state, open: false})
    }
    function handleSubmit() {
      setState({...state, open: false});
      console.log(values.date)
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
            <p>{values.time}</p>
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
