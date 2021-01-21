import React from "react";

import Sock from "./Sock";
import PorkRinds from "./PorkRinds";
import Beer from "./Beer";
import Home from "./Home";


import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Vending Machine</h1>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Beer">
          <Beer />
        </Route>
        <Route exact path="/PorkRinds">
          <PorkRinds />
        </Route>
        <Route exact path="/Sock">
          <Sock />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
