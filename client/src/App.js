import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import "./styles.scss";

import BubblesPage from "./components/BubblePage";

function App(props) {
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(false);
  };
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <Link to="/login">Login</Link>

          <Link to="/bubbles">Bubbles Page</Link>

          <button onClick={logout}>Log Out</button>
        </div>
        <div className="routes">
          <Switch>
            <PrivateRoute path="/bubbles" component={BubblesPage} />

            <Route path="/login" component={Login} />
            <Route exact path="/" component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
