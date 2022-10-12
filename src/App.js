import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage3Light from "./pages/Homepage3Light";



import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
        <Homepage3Light />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
