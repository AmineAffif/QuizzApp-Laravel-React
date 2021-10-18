import './style/App.css';

import Homepage from './Components/Homepage';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';

function App() {
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
      <Router>
        {/* Header will be here */}
        <Header />
        <Switch>
          <Route exact strict path="/">
            <Homepage />
          </Route>
          <Route exact strict path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
}

export default App;
