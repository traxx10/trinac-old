import React, { useState } from "react";
import { connect } from "react-redux";
import { Drawer } from "@material-ui/core";
import ScrollToTop from "react-scroll-up";
import ReactResizeDetector from "react-resize-detector";
import styles from "./Homepage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Process from "../../components/Process/Process";
import {
  toggleSideMenu,
  onDimensionChange,
  onLoadComplete,
  onAppLoaded
} from "../../actions/HomePageAction";
import SideMenu from "../../components/SideMenu/SideMenu";
import Services from "../../components/Services/Services";
import Reviews from "../../components/Reviews/Reviews";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";
import LoadingPage from "../LoadingPage/LoadingPage";
import Img from "react-image";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import { CSSTransition } from "react-transition-group";

function Homepage(props) {
  const [inProp, setInProp] = useState(false);

  const {
    onLoadComplete,
    onAppLoaded,
    onAppLoadComplete,
    loadingPage,
    sideMenu,
    toggleSideMenu
  } = props;

  if (!onAppLoadComplete) {
    setTimeout(() => {
      onLoadComplete();
      onAppLoaded();
      setInProp(true);
    }, 2500);
  }

  const onResize = (width, height) => {
    const { onDimensionChange } = props;
    let dimension = { width, height };
    onDimensionChange(dimension);
  };

  const renderComponent = () => {
    const { dimension } = props;

    if (loadingPage) {
      return (
        <CSSTransition
          in={!inProp}
          timeout={{ enter: 500, exit: 500 }}
          classNames={{
            enter: styles.FadeEnter,
            enterActive: styles.FadeEnterActive,
            exit: styles.FadeExit,
            exitActive: styles.FadeExitActive
          }}
        >
          <LoadingPage />
        </CSSTransition>
      );
    } else {
      return (
        <div id="homepage" className={styles.Homepage}>
          <ReactResizeDetector
            handleWidth
            handleHeight
            onResize={(width, height) => onResize(width, height)}
          />
          <Drawer open={sideMenu} onClose={() => toggleSideMenu(sideMenu)}>
            <SideMenu
              onMenuPress={() => toggleSideMenu(sideMenu)}
              sideMenuActive={sideMenu}
            />
          </Drawer>

          <div className={styles.HeaderContainer}>
            <Header />
          </div>

          <div id="process" className={styles.ProcessContainer}>
            <Process />
          </div>

          <div id="services" className={styles.ServicesContainer}>
            <Services />
          </div>

          <div id="portfolio" className={styles.PortfolioContainer}>
            <Portfolio />
          </div>

          <div id="reviews" className={styles.ReviewsContainer}>
            <Reviews />
          </div>

          <div id="contact" className={styles.ContactContainer}>
            <Contact />
          </div>

          <div className={styles.FooterContainer}>
            <Footer />
          </div>

          {dimension.width <= 415 ? null : (
            <ScrollToTop
              style={{
                position: "fixed",
                cursor: "pointer",
                transitionDuration: "0.2s",
                transitionTimingFunction: "linear",
                transitionDelay: "0s",
                zIndex: 200,
                right: dimension.width <= 415 ? 15 : 30,
                bottom: dimension.width <= 415 ? 150 : 50
              }}
              showUnder={160}
            >
              <div className={styles.ScrollContainer}>
                <ArrowUpwardRoundedIcon className={styles.ScrollUp} />
              </div>
            </ScrollToTop>
          )}
        </div>
      );
    }
  };

  return <>{renderComponent()}</>;
}

const mapStateToProps = state => {
  return {
    sideMenu: state.HomePageReducer.sideMenu,
    loadingPage: state.HomePageReducer.loadingPage,
    onAppLoadComplete: state.HomePageReducer.onAppLoadComplete,
    dimension: state.HomePageReducer.dimension
  };
};

export default connect(mapStateToProps, {
  toggleSideMenu,
  onDimensionChange,
  onLoadComplete,
  onAppLoaded
})(Homepage);
