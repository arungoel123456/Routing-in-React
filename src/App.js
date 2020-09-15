import React from "react";
import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Notfound from "./Notfound";
import Dashboard from "./Dashboard";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h1> Hi I am Arun.</h1>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>

        <NavLink to="/about" exact activeClassName="active">
          About
        </NavLink>

        <NavLink to="/about/1" activeClassName="active">
          About1
        </NavLink>

        <NavLink to="/about/2" activeClassName="active">
          About2
        </NavLink>

        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>

        <NavLink to="/dashboard" activeClassName="active">
          Dashboard
        </NavLink>
        <NavLink to="/login" activeClassName="active">
          Login
        </NavLink>

        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/:id?" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />

          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
