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
  onDimensionChange
} from "../../actions/HomePageAction";
import SideMenu from "../../components/SideMenu/SideMenu";
import Services from "../../components/Services/Services";
import Reviews from "../../components/Reviews/Reviews";
import Portfolio from "../../components/Portfolio/Portfolio";

class Homepage extends PureComponent {
  onResize = (width, height) => {
    const { onDimensionChange } = this.props;
    let dimension = { width, height };
    onDimensionChange(dimension);
  };

  render() {
    const { sideMenu, toggleSideMenu } = this.props;
    return (
      <div className={styles.Homepage}>
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

        <div id="process" style={styles.ProcessContainer}>
          <Process />
        </div>

        <div id="services" style={styles.ServicesContainer}>
          <Services />
        </div>

        <div id="portfolio" style={styles.PortfolioContainer}>
          <Portfolio />
        </div>

        <div id="reviews" style={styles.ReviewsContainer}>
          <Reviews />
        </div>

        <div className={styles.FooterContainer}>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sideMenu: state.HomePageReducer.sideMenu
  };
};
export default connect(mapStateToProps, { toggleSideMenu, onDimensionChange })(
  Homepage
);
