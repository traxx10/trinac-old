import React, { PureComponent } from "react";
import { Grid, Card } from "@material-ui/core";
import Img from "react-image";
import styles from "./Process.module.scss";

class Process extends PureComponent {
  render() {
    return (
      <div className={styles.Process}>
        <div className={styles.HeaderContainer}>
          <h1>
            Clients come with a vision.
            <br /> We bring to reality!
          </h1>
        </div>
        <div className={styles.Content}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <div className={styles.Section}>
                <Img
                  className={styles.Icon}
                  src={require("../../assets/process/research.svg")}
                />
                <p className={styles.Title}> Research </p>
                <p className={styles.SubTitle}>
                  In consequat, quam id sodales hendrerit, eros mi molestie leo,
                  nec lacinia risus neque tristique augue. Proin tempus urna vel
                  congue elementum. Vestibulum euismod accumsan dui, ac iaculis
                  rhoncus nibh elementum quis.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <div className={styles.Section}>
                <Img
                  className={styles.Icon}
                  src={require("../../assets/process/design.svg")}
                />
                <p className={styles.Title}> Design </p>
                <p className={styles.SubTitle}>
                  Nulla eleifend pulvinar purus, molestie euismod odio imperdiet
                  ac. Ut sit amet erat nec nibh rhoncus varius in non lorem.
                  Donec interdum, lectus in convallis pulvinar, enim elit porta
                  sapien, vel finibus erat felis sed neque. Etiam aliquet neque
                  sagittis erat tincidunt aliquam. pulvinar nisi, ac fringilla
                  urna.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <div className={styles.Section}>
                <Img
                  className={styles.Icon}
                  src={require("../../assets/process/develop.svg")}
                />
                <p className={styles.Title}> Develop </p>
                <p className={styles.SubTitle}>
                  Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut
                  porta facilisis elementum. Sed condimentum sed massa quis
                  ullamcorper. Donec at scelerisque neque. Pellentesque
                  sagittis, massa sodales sodales finibus, felis ligula tempus
                  lorem, eu porttitor ex lacus vel felis. condimentum felis
                  dignissim nec.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <div className={styles.Section}>
                <Img
                  className={styles.Icon}
                  src={require("../../assets/process/deploy.svg")}
                />
                <p className={styles.Title}> Deploy </p>
                <p className={styles.SubTitle}>
                  {" "}
                  In consequat, quam id sodales hendrerit, eros mi molestie leo,
                  nec lacinia risus neque tristique augue. Proin tempus urna vel
                  congue elementum. Vestibulum euismod accumsan dui, ac iaculis
                  sem viverra eu. Donec convallis, elit vitae ornare cursus,
                  neque. Cras accumsan pretium dignissim.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Process;