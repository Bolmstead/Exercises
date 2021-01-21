import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <p><Link to="/Beer">Beer</Link></p>
      <p><Link to="/PorkRinds">PorkRinds</Link></p>
      <p><Link to="/Sock">Sock</Link></p>
    </div>
  );
}

export default Home;
