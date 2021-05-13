import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import LandingPage from './components/pages/LandingPage.component';
import SignInPage from './components/pages/SignInPage.component';

function App() {

  return (
    <Router>
      <Switch>
        {/* Client app routes */}
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/login" component={SignInPage} />
      </Switch>
    </Router>
  );
}

export default App;
