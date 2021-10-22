import "./style/App.css";

import Homepage from "./Components/Homepage";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import { useAuth0 } from "@auth0/auth0-react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Auth0ProviderWithHistory from "./Auth0ProviderWithHistory";
import QuizPage from "./Components/Quiz/QuizPage";
import QuizResult from "./Components/Quiz/QuizResult";
import CreateQuiz from "./Components/Admin/CreateQuiz";
import RequestAPI from "./Utils/Api";
import { useEffect, useState } from "react";

function App() {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  const [userRole, setUserRole] = useState();

  useEffect(() => {
    RequestAPI("POST", "getUserRole", {
      user_id: user?.sub,
    })
      .then(function (reponse) {
        setUserRole(reponse.data.role);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, [user]);

  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <Router>
          {/* Header will be here over all pages */}
          <Header />
          <Switch>
            <Route exact strict path="/">
              <Homepage />
            </Route>
            <Route exact strict path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact strict path="/play/:id">
              <QuizPage />
            </Route>
            <Route exact strict path="/result/:id">
              <QuizResult />
            </Route>
            {userRole == "admin" ? (
              <Route exact strict path="/createQuiz">
                <CreateQuiz />
              </Route>
            ) : (
              ""
            )}
          </Switch>
        </Router>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
}

export default App;
