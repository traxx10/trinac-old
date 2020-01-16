import React, { PureComponent } from "react";
import { Card, Grid, Avatar } from "@material-ui/core";
import Img from "react-image";
import styles from "./Services.module.scss";

class Services extends PureComponent {
  render() {
    return (
      <div className={styles.Services}>
        <div className={styles.HeaderContainer}>
          <h1>Services</h1>
        </div>
        <div className={styles.ContentContainer}>
          <Grid className={styles.GridContainer} container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Card className={styles.Card}>
                <div className={styles.CardHeader}>
                  <p> Web Design</p>
                </div>
                <div className={styles.CardContent}>
                  <p>
                    Commodo consectetur ut officia tempor. Culpa incididunt do
                    quis dolor officia qui. Pariatur exercitation ad aliqua
                    consequat aute mollit reprehenderit in mollit duis veniam ea
                    consequat cillum non.
                  </p>
                </div>
                <div className={styles.CardFooter}>
                  <Avatar
                    alt="Trinac Web Development"
                    className={styles.Avatar}
                    src={require("../../assets/services/webdesign.svg")}
                    classes={{ img: styles.AvatarIcon }}
                  />
                  <Img
                    className={styles.CardWave1}
                    src={require("../../assets/services/wave1.svg")}
                  />
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Card className={[styles.Card, styles.Card2, styles.CardMiddle]}>
                <div className={styles.CardHeader}>
                  <p> Mobile App Design</p>
                </div>
                <div className={styles.CardContent}>
                  <p>
                    Commodo consectetur ut officia tempor. Culpa incididunt do
                    quis dolor officia qui. Pariatur exercitation ad aliqua
                    consequat aute mollit reprehenderit in mollit duis veniam ea
                    consequat cillum non.
                  </p>
                </div>
                <div className={styles.CardFooter}>
                  <Avatar
                    alt="Trinac Mobile App Development"
                    className={styles.Avatar}
                    src={require("../../assets/services/mobiledev.png")}
                    classes={{
                      img: styles.AvatarIconMobile
                    }}
                  />
                  <Img
                    className={styles.CardWave1}
                    src={require("../../assets/services/wave1.svg")}
                  />
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Card className={styles.Card}>
                <div className={styles.CardHeader}>
                  <p> Graphics Design</p>
                </div>
                <div className={styles.CardContent}>
                  <p>
                    Commodo consectetur ut officia tempor. Culpa incididunt do
                    quis dolor officia qui. Pariatur exercitation ad aliqua
                    consequat aute mollit reprehenderit in mollit duis veniam ea
                    consequat cillum non.
                  </p>
                </div>
                <div className={styles.CardFooter}>
                  <Avatar
                    alt="Trinac Design"
                    className={styles.Avatar}
                    src={require("../../assets/services/graphicdesign.png")}
                    classes={{
                      img: styles.AvatarIconMobile
                    }}
                  />
                  <Img
                    className={styles.CardWave1}
                    src={require("../../assets/services/wave1.svg")}
                  />
                </div>
              </Card>
            </Grid>
          </Grid>
          <Grid className={styles.GridContainer} container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Card className={[styles.Card, styles.Card2]}>
                <div className={styles.CardHeader}>
                  <p> Motion Graphics</p>
                </div>
                <div className={styles.CardContent}>
                  <p>
                    Commodo consectetur ut officia tempor. Culpa incididunt do
                    quis dolor officia qui. Pariatur exercitation ad aliqua
                    consequat aute mollit reprehenderit in mollit duis veniam ea
                    consequat cillum non.
                  </p>
                </div>
                <div className={styles.CardFooter}>
                  <Avatar
                    alt="Motion Graphics"
                    className={styles.Avatar}
                    src={require("../../assets/services/motiongraphics.png")}
                    classes={{
                      img: styles.AvatarIconMobile
                    }}
                  />
                  <Img
                    className={styles.CardWave1}
                    src={require("../../assets/services/wave1.svg")}
                  />
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Card
                className={[styles.Card, styles.CardMiddle]}
                // className={[styles.Card}]
              >
                <div className={styles.CardHeader}>
                  <p> Photography</p>
                </div>
                <div className={styles.CardContent}>
                  <p>
                    Commodo consectetur ut officia tempor. Culpa incididunt do
                    quis dolor officia qui. Pariatur exercitation ad aliqua
                    consequat aute mollit reprehenderit in mollit duis veniam ea
                    consequat cillum non.
                  </p>
                </div>
                <div className={styles.CardFooter}>
                  <Avatar
                    alt="Trinac Photography"
                    className={styles.Avatar}
                    src={require("../../assets/services/photography.png")}
                    classes={{
                      img: styles.AvatarIconMobile
                    }}
                  />
                  <Img
                    className={styles.CardWave1}
                    src={require("../../assets/services/wave1.svg")}
                  />
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Card className={[styles.Card, styles.Card2]}>
                <div className={styles.CardHeader}>
                  <p> Machine Learning</p>
                </div>
                <div className={styles.CardContent}>
                  <p>
                    Commodo consectetur ut officia tempor. Culpa incididunt do
                    quis dolor officia qui. Pariatur exercitation ad aliqua
                    consequat aute mollit reprehenderit in mollit duis veniam ea
                    consequat cillum non.
                  </p>
                </div>
                <div className={styles.CardFooter}>
                  <Avatar
                    alt="Trinac Machine Learning"
                    className={styles.Avatar}
                    src={require("../../assets/services/machinelearning.png")}
                    classes={{
                      img: styles.AvatarIconMobile
                    }}
                  />
                  <Img
                    className={styles.CardWave1}
                    src={require("../../assets/services/wave1.svg")}
                  />
                </div>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Services;
