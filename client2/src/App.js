import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Edit from "./components/edit/Edit.jsx";
import Homepage from "./components/homepage/Homepage.jsx";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/edit">
          <Edit></Edit>
        </Route>
        <Route exact path="/homepage">
          <Homepage></Homepage>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
