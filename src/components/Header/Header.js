import React, { PureComponent } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { Button, Grid, Icon } from "@material-ui/core";
import { connect } from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import Img from "react-image";
import styles from "./Header.module.scss";
import Lottie from "react-lottie";
import animationData from "../../assets/lottie/homescreen.json";

import { toggleSideMenu } from "../../actions/HomePageAction";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

class Header extends PureComponent {
  render() {
    const { toggleSideMenu, sideMenu } = this.props;
    return (
      <header className={styles.Header}>
        <div className={styles.HeaderTop}>
          <Grid container>
            <Grid xs={1} item></Grid>
            <Grid xs={10} item>
              <div className={styles.MenuContainer}>
                <div className={styles.LogoContainer}>
                  <Link to={`/`}>
                    <Img
                      className={styles.Logo}
                      src={require("../../assets/logo/trinac-logo-white.svg")}
                    />
                  </Link>
                </div>
                <div className={styles.MenuLeft}>
                  <HashLink
                    className={styles.MenuItem}
                    style={{ marginLeft: 0 }}
                    to="/#process"
                    scroll={el =>
                      el.scrollIntoView({ behavior: "smooth", block: "end" })
                    }
                  >
                    Process
                  </HashLink>
                  <HashLink
                    className={styles.MenuItem}
                    to="/#services"
                    scroll={el =>
                      el.scrollIntoView({ behavior: "smooth", block: "end" })
                    }
                  >
                    Services
                  </HashLink>
                  <HashLink
                    className={styles.MenuItem}
                    to="/#portfolio"
                    scroll={el =>
                      el.scrollIntoView({ behavior: "smooth", block: "end" })
                    }
                  >
                    Portfolio
                  </HashLink>
                  <HashLink
                    className={styles.MenuItem}
                    to="/#reviews"
                    scroll={el =>
                      el.scrollIntoView({ behavior: "smooth", block: "end" })
                    }
                  >
                    Reviews
                  </HashLink>
                </div>
                <div className={styles.MenuRight}>
                  <Button className={styles.Button} variant="contained">
                    <HashLink
                      to="/#contact"
                      scroll={el =>
                        el.scrollIntoView({ behavior: "smooth", block: "end" })
                      }
                    >
                      Lets talk! 😎
                    </HashLink>
                  </Button>
                </div>
                <div className={styles.MenuIconContainer}>
                  <MenuIcon
                    onClick={() => toggleSideMenu(sideMenu)}
                    fontSize="large"
                    className={styles.MenuIcon}
                  />
                </div>
              </div>
            </Grid>
            <Grid xs={1} item></Grid>
          </Grid>
        </div>
        <div className={styles.HeaderContent}>
          <Grid container>
            <Grid xs={1} container item></Grid>
            <Grid xs={10} container item>
              <Grid container>
                <Grid item xs={12} md={12} lg={6} xl={6}>
                  <div className={styles.LeftContainer}>
                    <div className={styles.Details}>
                      <span> We build </span> <br />
                      <span> awesome apps</span> <br />
                      <span> that users love.</span>
                    </div>
                    <Button className={styles.Button} variant="contained">
                      <HashLink
                        to="/#contact"
                        scroll={el =>
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "end"
                          })
                        }
                      >
                        Lets talk! 😎
                      </HashLink>
                    </Button>
                  </div>
                </Grid>
                <Grid item xs={12} md={12} lg={6} xl={6}>
                  <div className={styles.GridLottie}>
                    <div className={styles.LottieContainer}>
                      <Lottie
                        eventListeners={[
                          {
                            eventName: "complete",
                            callback: () =>
                              console.log("the animation completed:")
                          }
                        ]}
                        options={defaultOptions}
                        height={this.props.dimension.width <= 640 ? 100 : 300}
                        width={this.props.dimension.width <= 640 ? 100 : 300}
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={1} container item></Grid>
          </Grid>
        </div>
        <div className={styles.WavesContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              // fill="#3746D5"
              fill-opacity="1"
              d="M0,96L40,80C80,64,160,32,240,48C320,64,400,128,480,133.3C560,139,640,85,720,85.3C800,85,880,139,960,149.3C1040,160,1120,128,1200,117.3C1280,107,1360,117,1400,122.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    sideMenu: state.HomePageReducer.sideMenu,
    dimension: state.HomePageReducer.dimension
  };
};

export default connect(mapStateToProps, { toggleSideMenu })(Header);
