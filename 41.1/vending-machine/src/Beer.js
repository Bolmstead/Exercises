import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


function Beer() {
  return (
    <div>
      <h1>BEER!!!! SO REFRESHING</h1>

      <p><Link to="/">Go Back</Link></p>
    </div>
  );
}

export default Beer;
