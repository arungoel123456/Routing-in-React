import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
import Contact1 from "./Contact1";
import Contact2 from "./Contact2";

export default class Contact extends React.Component {
  render() {
    return (
      <>
        <div className="c-sidebar">
          <NavLink to="/contact/c1" activeClassName="active">
            Contact1
          </NavLink>
          <br></br>
          <NavLink to="/contact/c2" activeClassName="active">
            Contact2
          </NavLink>
        </div>

        <div className="c-box1">
          <button
            onClick={() => {
              this.props.history.push("/about?id=11", { userId: 21 });
            }}
          >
            {" "}
            Go to About Page{" "}
          </button>

          <button
            onClick={() => {
              this.props.history.replace("/about");
            }}
          >
            {" "}
            Go to About Page With Replace{" "}
          </button>

          <button
            onClick={() => {
              this.props.history.push({
                pathname: "/about",
                search: "id=11",
                state: { userId: 22 },
              });
            }}
          >
            {" "}
            Go to About Page via Location{" "}
          </button>

          <Switch>
            <Route path="/contact/c1" component={Contact1} />
            <Route path="/contact/c2" component={Contact2} />
          </Switch>
        </div>

        <div className="c-content">
          <h3>This is our Contact Page.</h3>

          <Switch>
            <Route path="/contact/c1" component={Contact1} />
            <Route path="/contact/c2" component={Contact2} />
          </Switch>
        </div>
      </>
    );
  }
}
