import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import LandingPage from './components/pages/LandingPage.component';
import SignInPage from './components/pages/SignInPage.component';
// Redux
import { useSelector, useDispatch } from "react-redux";
import allActions from './redux/actions/index';
// React Router
import { useHistory } from "react-router-dom";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(()=>{
    if(!user.authenticated) {
      dispatch(allActions.userActions.getUser(history))
    }
  }, [user, history, dispatch])

  return (
    <Router>
      <Switch>
        {/* Client app routes */}
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/signin" component={SignInPage} />
      </Switch>
    </Router>
  );
}

export default App;
