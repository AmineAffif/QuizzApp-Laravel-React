import logo from './logo.svg';
import './App.css';

import Homepage from './Components/Homepage';
import Dashboard from './Components/Dashboard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Header will be here */}
      <Switch>
        <Route exact strict path="/">
          <Homepage />
        </Route>
        <Route exact strict path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
