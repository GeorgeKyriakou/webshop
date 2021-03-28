import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { NavigationComponent } from "./components/Navbar";
import AppState from "./context/app/state";
import CartState from "./context/cart/state";

const App: React.FC = () => {
  return (
    <AppState>
      <Router>
        <CartState>
          <NavigationComponent />
          <Switch>
            {/* <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route> */}
          </Switch>
        </CartState>
      </Router>
    </AppState>
  );
};

export default App;
