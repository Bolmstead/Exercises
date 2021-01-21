import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Sock() {
  return (
    <div>
      <h1>Just a Sock!</h1>
      <p><Link to="/">Go Back</Link></p>
    </div>
  );
}

export default Sock;
