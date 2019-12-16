import React, { PureComponent } from "react";
import styles from "./Homepage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Homepage extends PureComponent {
  render() {
    return (
      <div className={styles.Homepage}>
        <div className={styles.HeaderContainer}>
          <Header />
        </div>

        <div className={styles.FooterContainer}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Homepage;
