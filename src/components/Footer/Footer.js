import React, { PureComponent } from "react";
import { Grid } from "@material-ui/core";
import Img from "react-image";
import styles from "./Footer.module.scss";

class Footer extends PureComponent {
  render() {
    return (
      <footer className={styles.Footer}>
        <Grid container>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <div className={styles.Copyright}>
              <span>
                © 2020 <strong> Trinac </strong> All Rights Reserved
              </span>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <div className={styles.Social}>
              <a href="#">
                <Img
                  className={styles.SocialIcons}
                  src={require("../../assets/footer/instagram.svg")}
                />
              </a>
              <a href="#">
                <Img
                  className={styles.SocialIcons}
                  src={require("../../assets/footer/facebook.svg")}
                />
              </a>
              <a href="#">
                <Img
                  className={styles.SocialIcons}
                  src={require("../../assets/footer/twitter.svg")}
                />
              </a>
              <a href="#">
                <Img
                  className={styles.SocialIcons}
                  src={require("../../assets/footer/linkedin.svg")}
                />
              </a>

              <a href="#">
                <Img
                  className={styles.SocialIcons}
                  src={require("../../assets/footer/whatsapp.svg")}
                />
              </a>
              <a href="#">
                <Img
                  className={styles.SocialIcons}
                  src={require("../../assets/footer/telegram.svg")}
                />
              </a>
            </div>
          </Grid>
        </Grid>

        <div className={styles.Social}></div>
      </footer>
    );
  }
}

export default Footer;
