import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Dashboard = (props) => {
  const [isAuth, setIsAuth] = useState(true);

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h3> Welcome to the Dashboard page </h3>
      <button onClick={() => setIsAuth(false)}>Logout</button>
      isAuth : {isAuth.toString()}
    </div>
  );
};

export default Dashboard;
