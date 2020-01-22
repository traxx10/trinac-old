import React, { PureComponent } from "react";
import { Card, Grid, Avatar, Button } from "@material-ui/core";
import Img from "react-image";
import ReactCardFlip from "react-card-flip";
import styles from "./Services.module.scss";

class Services extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      webFlipped: false,
      mobileFlipped: false,
      graphicsFlipped: false,
      motionFlipped: false,
      photographyFlipped: false,
      machineFlipped: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type, value) {
    // e.preventDefault();
    this.setState(prevState => ({ [type]: !value }));
  }
  render() {
    return (
      <div className={styles.Services}>
        <div className={styles.HeaderContainer}>
          <h1>Services</h1>
        </div>
        <div className={styles.ContentContainer}>
          <Grid className={styles.GridContainer} container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <ReactCardFlip
                isFlipped={this.state.webFlipped}
                flipDirection="horizontal"
              >
                <Card className={styles.Card}>
                  <div className={styles.CardHeader}>
                    <p> Web Design</p>
                  </div>
                  <div className={styles.CardContent}>
                    <p>
                      Commodo consectetur ut officia tempor. Culpa incididunt do
                      quis dolor officia qui. Pariatur exercitation ad aliqua
                      consequat aute mollit reprehenderit in mollit duis veniam
                      ea consequat cillum non.
                    </p>
                  </div>
                  <div className={styles.CardFooter}>
                    <Avatar
                      alt="Trinac Web Development"
                      className={styles.Avatar}
                      src={require("../../assets/services/webdesign.svg")}
                      classes={{ img: styles.AvatarIcon }}
                      onClick={() =>
                        this.handleClick("webFlipped", this.state.webFlipped)
                      }
                    />

                    <Img
                      className={styles.CardWave1}
                      src={require("../../assets/services/wave1.svg")}
                    />
                  </div>
                </Card>
                <Card className={styles.CardBack}>
                  <div
                    className={styles.Avatar}
                    onClick={() =>
                      this.handleClick("webFlipped", this.state.webFlipped)
                    }
                  />
                </Card>
              </ReactCardFlip>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={4}
              xl={4}
              className={styles.CardMiddle}
            >
              <ReactCardFlip
                isFlipped={this.state.mobileFlipped}
                flipDirection="horizontal"
              >
                <Card className={[styles.Card, styles.Card2]}>
                  <div className={styles.CardHeader}>
                    <p> Mobile App Design</p>
                  </div>
                  <div className={styles.CardContent}>
                    <p>
                      Commodo consectetur ut officia tempor. Culpa incididunt do
                      quis dolor officia qui. Pariatur exercitation ad aliqua
                      consequat aute mollit reprehenderit in mollit duis veniam
                      ea consequat cillum non.
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
                      onClick={() =>
                        this.handleClick(
                          "mobileFlipped",
                          this.state.mobileFlipped
                        )
                      }
                    />
                    <Img
                      className={styles.CardWave1}
                      src={require("../../assets/services/wave1.svg")}
                    />
                  </div>
                </Card>
                <Card className={[styles.CardBack2]}>
                  <div
                    className={styles.Avatar}
                    onClick={() =>
                      this.handleClick(
                        "mobileFlipped",
                        this.state.mobileFlipped
                      )
                    }
                  />
                </Card>
              </ReactCardFlip>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <ReactCardFlip
                isFlipped={this.state.graphicsFlipped}
                flipDirection="horizontal"
              >
                <Card className={styles.Card}>
                  <div className={styles.CardHeader}>
                    <p> Graphics Design</p>
                  </div>
                  <div className={styles.CardContent}>
                    <p>
                      Commodo consectetur ut officia tempor. Culpa incididunt do
                      quis dolor officia qui. Pariatur exercitation ad aliqua
                      consequat aute mollit reprehenderit in mollit duis veniam
                      ea consequat cillum non.
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
                      onClick={() =>
                        this.handleClick(
                          "graphicsFlipped",
                          this.state.graphicsFlipped
                        )
                      }
                    />
                    <Img
                      className={styles.CardWave1}
                      src={require("../../assets/services/wave1.svg")}
                    />
                  </div>
                </Card>
                <Card className={styles.CardBack}>
                  <div
                    className={styles.Avatar}
                    onClick={() =>
                      this.handleClick(
                        "graphicsFlipped",
                        this.state.graphicsFlipped
                      )
                    }
                  />
                </Card>
              </ReactCardFlip>
            </Grid>
          </Grid>
          <Grid className={styles.GridContainer} container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <ReactCardFlip
                isFlipped={this.state.motionFlipped}
                flipDirection="horizontal"
              >
                <Card className={[styles.Card, styles.Card2]}>
                  <div className={styles.CardHeader}>
                    <p> Motion Graphics</p>
                  </div>
                  <div className={styles.CardContent}>
                    <p>
                      Commodo consectetur ut officia tempor. Culpa incididunt do
                      quis dolor officia qui. Pariatur exercitation ad aliqua
                      consequat aute mollit reprehenderit in mollit duis veniam
                      ea consequat cillum non.
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
                      onClick={() =>
                        this.handleClick(
                          "motionFlipped",
                          this.state.motionFlipped
                        )
                      }
                    />
                    <Img
                      className={styles.CardWave1}
                      src={require("../../assets/services/wave1.svg")}
                    />
                  </div>
                </Card>
                <Card className={styles.CardBack2}>
                  <div
                    className={styles.Avatar}
                    onClick={() =>
                      this.handleClick(
                        "motionFlipped",
                        this.state.motionFlipped
                      )
                    }
                  />
                </Card>
              </ReactCardFlip>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={4}
              xl={4}
              className={styles.CardMiddle}
            >
              <ReactCardFlip
                isFlipped={this.state.photographyFlipped}
                flipDirection="horizontal"
              >
                <Card className={[styles.Card]}>
                  <div className={styles.CardHeader}>
                    <p> Photography</p>
                  </div>
                  <div className={styles.CardContent}>
                    <p>
                      Commodo consectetur ut officia tempor. Culpa incididunt do
                      quis dolor officia qui. Pariatur exercitation ad aliqua
                      consequat aute mollit reprehenderit in mollit duis veniam
                      ea consequat cillum non.
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
                      onClick={() =>
                        this.handleClick(
                          "photographyFlipped",
                          this.state.photographyFlipped
                        )
                      }
                    />
                    <Img
                      className={styles.CardWave1}
                      src={require("../../assets/services/wave1.svg")}
                    />
                  </div>
                </Card>
                <Card className={[styles.CardBack]}>
                  <div
                    className={styles.Avatar}
                    onClick={() =>
                      this.handleClick(
                        "photographyFlipped",
                        this.state.photographyFlipped
                      )
                    }
                  />
                </Card>
              </ReactCardFlip>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <ReactCardFlip
                isFlipped={this.state.machineFlipped}
                flipDirection="horizontal"
              >
                <Card className={[styles.Card, styles.Card2]}>
                  <div className={styles.CardHeader}>
                    <p> Machine Learning</p>
                  </div>
                  <div className={styles.CardContent}>
                    <p>
                      Commodo consectetur ut officia tempor. Culpa incididunt do
                      quis dolor officia qui. Pariatur exercitation ad aliqua
                      consequat aute mollit reprehenderit in mollit duis veniam
                      ea consequat cillum non.
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
                      onClick={() =>
                        this.handleClick(
                          "machineFlipped",
                          this.state.machineFlipped
                        )
                      }
                    />
                    <Img
                      className={styles.CardWave1}
                      src={require("../../assets/services/wave1.svg")}
                    />
                  </div>
                </Card>
                <Card className={[styles.CardBack2]}>
                  <div
                    className={styles.Avatar}
                    onClick={() =>
                      this.handleClick(
                        "machineFlipped",
                        this.state.machineFlipped
                      )
                    }
                  />
                </Card>
              </ReactCardFlip>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Services;
