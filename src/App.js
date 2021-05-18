import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// HOCs
import AuthRoute from './utils/hocs/AuthRoute.hoc';
// Pages
import LandingPage from './components/pages/LandingPage.component';
import SignInPage from './components/pages/SignInPage.component';
import ProfilePage from './components/pages/ProfilePage.component';
import PrivacyPage from './components/pages/PrivacyPage.component';
import ContactPage from './components/pages/ContactPage.component';
import AboutPage from './components/pages/AboutPage.component';
// Redux
import { useSelector, useDispatch } from "react-redux";
import allActions from './redux/actions/index';

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  React.useEffect(()=>{
    if(!user.authenticated) {
      dispatch(allActions.userActions.getUser())
    }
  }, [user, dispatch])

  return (
    <Router>
      <Switch>
        {/* Client app routes */}
        <Route exact path="/" component={LandingPage} />
        <AuthRoute exact path="/home" component={LandingPage} user={user}/>
        <Route exact path="/signin" component={SignInPage} />
        <AuthRoute exact path="/profile" component={ProfilePage} user={user}/>
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/privacy" component={PrivacyPage} />
        
      </Switch>
    </Router>
  );
}

export default App;
