import React, { PureComponent } from "react";
import { Grid, ButtonBase, Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ThreeBounce } from "better-react-spinkit";
import Img from "react-image";
import styles from "./Portfolio.module.scss";

class Portfolio extends PureComponent {
  renderSource = image => {
    if (image.category === "web") {
      return require("../../assets/services/webdesign.svg");
    } else if (image.category === "mobile") {
      return require("../../assets/services/mobiledev.png");
    } else if (image.category === "logo") {
      return require("../../assets/services/graphicdesign.png");
    } else if (image.category === "motion") {
      return require("../../assets/services/motiongraphics.png");
    } else if (image.category === "ui/ux") {
      return require("../../assets/services/graphicdesign.png");
    }
  };
  render() {
    const { portfolio } = this.props;
    const images = portfolio.map((image, index) => {
      return (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <div className={styles.ButtonBase}>
            <div className={styles.Overlay}>
              <div className={styles.Button}>
                {image.category === "mobile" || image.category === "web" ? (
                  <a
                    href={image.appUrl}
                    target="_blank"
                    className={styles.Link}
                  >
                    View
                  </a>
                ) : (
                  <Link
                    to={{
                      pathname: `/portfolio/${index}`,
                      state: {
                        data: image
                      }
                    }}
                    className={styles.Link}
                  >
                    View
                  </Link>
                )}
              </div>
            </div>
            <Img
              loader={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%"
                  }}
                >
                  <ThreeBounce size={15} />
                </div>
              }
              src={image.url}
              className={styles.Image}
            />
            <div className={styles.IconContainer}>
              <Img
                src={this.renderSource(image)}
                className={styles.IconImage}
              />
            </div>
          </div>
        </Grid>
      );
    });
    return (
      <div className={styles.Portfolio}>
        <div className={styles.HeaderContainer}>
          <h1> Our recent works!</h1>
        </div>
        <div className={styles.ContentContainer}>
          <Grid className={styles.GridContainer} container spacing={2}>
            {images}
          </Grid>

          <div className={[styles.ButtonContainer]}>
            <Button className={styles.Button}>
              <span> VIEW ALL </span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    portfolio: state.PortfolioReducer.portfolio
  };
};

export default connect(mapStateToProps)(Portfolio);
