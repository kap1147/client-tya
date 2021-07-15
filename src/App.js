import api from "./api";
import React from 'react';
import './App.css';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// HOCs
import AuthRoute from './utils/hocs/AuthRoute.hoc';
// Pages
import ChatPage from './components/pages/ChatPage.component';
import LandingPage from './components/pages/LandingPage.component';
import SignInPage from './components/pages/SignInPage.component';
import SignOutPage from './components/pages/SignOutPage.component';
import ProfilePage from './components/pages/ProfilePage.component';
import PrivacyPage from './components/pages/PrivacyPage.component';
import HomePage from './components/pages/HomePage.component';
import ContactPage from './components/pages/ContactPage.component';
import AboutPage from './components/pages/AboutPage.component';
import PostListPage from './components/pages/PostListPage.component';
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
  const [accessToken, setAccessToken] = React.useState(localStorage.getItem('accessToken'));
  const [geo, setGeo] = React.useState(localStorage.getItem('geo'));
  const [geoCity, setGeoCity] = React.useState(localStorage.getItem('geo_city'));
  const [geoState, setGeoState] = React.useState(localStorage.getItem('geo_state'));
  const [geoLon, setGeoLon] = React.useState(localStorage.getItem('geo_lon'));
  const [geoLat, setGeoLat] = React.useState(localStorage.getItem('geo_lat'));
  const dispatch = useDispatch();

  React.useEffect(async ()=>{
    if (refreshToken && !accessToken) {
      try {
        var res = await api.getToken();
	if (res.data.accessToken) {
          localStorage.setItem('accessToken', res.data.accessToken);
          dispatch(allActions.authActions.isAuthenticated(true));
	  window.location.reload();
	}
      } catch (err) {
	dispatch(allActions.authActions.isAuthenticated(false));
        console.error(err)
	alert(err.response.data.error);
      }
    } else if (!refreshToken && accessToken) {
       dispatch(allActions.authActions.isAuthenticated(false));
    };
  },[refreshToken, accessToken]);

  React.useEffect(() => {
    if (accessToken && !auth.authenticated) {
      dispatch(allActions.authActions.isAuthenticated(true));
    };
  }, [accessToken, auth]);

  React.useEffect(() => {
    if (auth.authenticated && !user.authenticated) {
      dispatch(allActions.userActions.getUser());
    }
  }, [auth, user]);

  React.useEffect(() => {
    if (user.authenticated) {
      console.log(user);
    }
  }, [ user]);
	
  React.useEffect(() => {
    if (geo && query.length === 0) { 
		dispatch(allActions.queryActions.setQuery({lon: geoLon, lat: geoLat, city: geoCity, state: geoState}));
    } else if (query.length === 0 && !geo){
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          dispatch(allActions.queryActions.initializeQuery({lng:position.coords.longitude, lat: position.coords.latitude}))
        });
      }
    };
    dispatch(allActions.postActions.fetchPosts(query));
  }, [query, geo]);

  React.useEffect(()=> {
    if (!socket.socket && accessToken){
      dispatch(allActions.socketActions.createSocket());
    }
    if (socket.socket && accessToken) {
      dispatch(allActions.socketActions.userOnline(socket.socket));
      dispatch(allActions.alertActions.getAlerts(socket.socket));
      socket.socket.on('allAlerts', (alerts) => {
        dispatch(allActions.alertActions.setAlerts(alerts));
      });
      socket.socket.on('newAlert', (alert) => {
        dispatch(allActions.alertActions.addAlert(alert));
      });
      return () => {
        dispatch(allActions.socketActions.closeSocket(socket.socket))
      }
    }
  }, [socket, accessToken]);


  return (
    <Router>
      <Switch>
        {/* Client app routes */}
        <Route exact path="/" component={HomePage} />
        <AuthRoute exact path="/home" component={LandingPage} />
        <AuthRoute exact path="/posts" component={PostListPage} />
        <Route exact path="/signin" component={SignInPage} />
        <AuthRoute exact path="/signout" component={SignOutPage} />
	<AuthRoute exact path="/profile" component={ProfilePage} />
	<AuthRoute exact path="/chat/user/:userId" component={ChatPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/privacy" component={PrivacyPage} />
	{/**/}
	<Route 
	  exact
	  path="/posts/:postId" 
	  component={PostDetailPage}
	  authenticated={auth.authenticated}
        />
      </Switch>
    </Router>
  );
}

export default App;
