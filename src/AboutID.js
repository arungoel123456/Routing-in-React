import React from "react";
import { withRouter } from "react-router-dom";

const AboutID = (props) => {
  const { params } = props.match;
  return <h3> Welcome to the about {params.id} page </h3>;
};

export default withRouter(AboutID);
