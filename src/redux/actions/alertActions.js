import { ADD_ALERT, REMOVE_ALERT, SET_ALERTS, CLEAR_ALERTS } from '../types';

const addAlert = (alert) => (dispatch) => {
  dispatch({type: ADD_ALERT, payload: alert });
};

const setAlerts = (alerts) => (dispatch) => {
  dispatch({ type: SET_ALERTS, payload: alerts});
};

const removeAlert = (alertId) => (dispatch) => {
  dispatch({ type: REMOVE_ALERT, payload: alertId });
};

const clearAlerts = () => (dispatch) => {
  dispatch({ type: CLEAR_ALERTS });
};

const getAlerts = (socket) => (dispatch) => {
  socket.emit('getAlerts');
};
export default { addAlert, clearAlerts, removeAlert, setAlerts, getAlerts }