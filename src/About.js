import React from "react";
import AboutID from "./AboutID";

const About = (props) => {
  return (
    <div>
      <h3> Welcome to the about page </h3>
      <AboutID id={props.match.params.id} />
      {JSON.stringify(props.history.location.state)}
    </div>
  );
};

export default About;
