import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './components/pages/LandingPage.component';

function App() {

  return (
    <Router>
      <Switch>
        {/* Client app routes */}
        <Route exact path="/" component={LandingPage}/>
      </Switch>
    </Router>
  );
}

export default App;
