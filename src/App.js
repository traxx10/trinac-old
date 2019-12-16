import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/HomePage/Homepage";

class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/" exact render={routeProps => <Homepage />} />
      </Switch>
    );
  }
}

export default App;
