import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Transition,
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import styles from "./App.module.scss";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PortfolioDetail from "./components/Portfolio/PortfolioDetail";
import Homepage from "./pages/HomePage/Homepage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
// import { play, exit } from "./utils/animation";

class App extends React.PureComponent {
  render() {
    return (
      <Route
        render={({ location }) => {
          const { pathname, key } = location;

          return (
            // <TransitionGroup component={null}>
            //   <CSSTransition
            //     unmountOnExit
            //     classNames={{
            //       appear: "my-appear",
            //       appearActive: "my-active-appear",
            //       appearDone: "my-done-appear",
            //       enter: styles.FadeEnter,
            //       enterActive: styles.FadeEnterActive,
            //       enterDone: "my-done-enter",
            //       exit: "my-exit",
            //       exitActive: "my-active-exit",
            //       exitDone: "my-done-exit"
            //     }}
            //     key={key}
            //     appear={true}
            //     timeout={{ enter: 500, exit: 500 }}
            //   >
            <Switch location={location}>
              <Route
                path="/"
                exact
                render={routeProps => <Homepage {...routeProps} />}
              />
              <Route
                path="/portfolio/:id"
                render={routeProps => <PortfolioDetail {...routeProps} />}
              />
            </Switch>
            //   </CSSTransition>
            // </TransitionGroup>
          );
        }}
      />
    );
  }
}

export default App;
