import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Drawer } from "@material-ui/core";
import ReactResizeDetector from "react-resize-detector";
import styles from "./Homepage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Process from "../../components/Process/Process";
import {
  toggleSideMenu,
  onDimensionChange,
  onLoadComplete
} from "../../actions/HomePageAction";
import SideMenu from "../../components/SideMenu/SideMenu";
import Services from "../../components/Services/Services";
import Reviews from "../../components/Reviews/Reviews";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";
import LoadingPage from "../LoadingPage/LoadingPage";

class Homepage extends PureComponent {
  componentDidMount() {
    const { onLoadComplete } = this.props;
    setTimeout(() => {
      onLoadComplete();
    }, 3000);
  }

  onResize = (width, height) => {
    const { onDimensionChange } = this.props;
    let dimension = { width, height };
    onDimensionChange(dimension);
  };

  renderComponent = () => {
    const { loadingPage, sideMenu, toggleSideMenu } = this.props;

    if (loadingPage) {
      return <LoadingPage />;
    } else {
      return (
        <div id="homepage" className={styles.Homepage}>
          <ReactResizeDetector
            handleWidth
            handleHeight
            onResize={this.onResize}
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
        </div>
      );
    }
  };

  render() {
    return this.renderComponent();
  }
}

const mapStateToProps = state => {
  return {
    sideMenu: state.HomePageReducer.sideMenu,
    loadingPage: state.HomePageReducer.loadingPage
  };
};
export default connect(mapStateToProps, {
  toggleSideMenu,
  onDimensionChange,
  onLoadComplete
})(Homepage);
