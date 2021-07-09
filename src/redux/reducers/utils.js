
export const removeAlert = (alerts, id) => {
  alerts.filter(function(alert){
    return alert.receiver !== id;
  });
};