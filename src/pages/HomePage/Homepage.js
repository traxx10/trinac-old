import React, { PureComponent } from "react";
import styles from "./Homepage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Process from "../../components/Process/Process";

class Homepage extends PureComponent {
  render() {
    return (
      <div className={styles.Homepage}>
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

export default Homepage;
