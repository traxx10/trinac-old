import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Drawer } from "@material-ui/core";
import styles from "./Homepage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Process from "../../components/Process/Process";
import { toggleSideMenu } from "../../actions/HomePageAction";
import SideMenu from "../../components/SideMenu/SideMenu";

class Homepage extends PureComponent {
  render() {
    const { sideMenu, toggleSideMenu } = this.props;

    return (
      <div className={styles.Homepage}>
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
export default connect(mapStateToProps, { toggleSideMenu })(Homepage);
