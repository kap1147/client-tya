import React from 'react';
import './App.css';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// HOCs
import AuthRoute from './utils/hocs/AuthRoute.hoc';
// Pages
import LandingPage from './components/pages/LandingPage.component';
import SignInPage from './components/pages/SignInPage.component';
import SignOutPage from './components/pages/SignOutPage.component';
import ProfilePage from './components/pages/ProfilePage.component';
import PrivacyPage from './components/pages/PrivacyPage.component';
import ContactPage from './components/pages/ContactPage.component';
import AboutPage from './components/pages/AboutPage.component';
import PostDetailPage from './components/pages/post-detail/PostDetailPage.container';
// Redux
import { useSelector, useDispatch } from "react-redux";
import allActions from './redux/actions/index';

function App() {
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const query = useSelector((state) => state.query);
  const socket = useSelector((state) => state.socket);
  const [refreshToken, setRefreshToken] = React.useState(Cookies.get('refreshToken'));
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (refreshToken){
      dispatch(allActions.authActions.setToken(refreshToken, 'r'));
    };
  },[refreshToken]);

  React.useEffect(() => {
    if (auth) {
      console.log(auth);
      if (!auth.authenticated && !Boolean(auth.accessToken) && auth.refreshToken) {
        dispatch(allActions.authActions.getToken());
      };
      if (!auth.authenticated && auth.accessToken && auth.refreshToken) {
	dispatch(allActions.authActions.isAuthenticated(true))
      };
    };
  }, [auth, refreshToken]);

  React.useEffect(() => {
    if (query.length === 0){
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          dispatch(allActions.queryActions.setQuery({lng:position.coords.longitude, lat: position.coords.latitude}))
        });
      }
    }
    dispatch(allActions.postActions.fetchPosts(query));
  }, [query]);

  React.useEffect(()=> {
    if (!socket.socket && user.authenticated && !socket.loading){
      dispatch(allActions.socketActions.createSocket());
    }
    if (socket.socket) {
      console.log(socket);
      dispatch(allActions.socketActions.userOnline(socket.socket));
      return () => {
        dispatch(allActions.socketActions.closeSocket(socket.socket))
        dispatch(allActions.authActions.clearAuth());
      }
    }
  }, [socket, user]);


  return (
    <Router>
      <Switch>
        {/* Client app routes */}
        <Route exact path="/" component={LandingPage} />
        <AuthRoute exact path="/home" component={LandingPage} user={user}/>
        <Route exact path="/signin" component={SignInPage} />
        <AuthRoute exact path="/signout" component={SignOutPage} user={user}/>
	<AuthRoute exact path="/profile" component={ProfilePage} user={user}/>
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/privacy" component={PrivacyPage} />
	{/**/}
	<Route 
	  exact
	  path="/posts/:postId" 
	  component={PostDetailPage}
	  authenticated={user.authenticated}
        />
      </Switch>
    </Router>
  );
}

export default App;
