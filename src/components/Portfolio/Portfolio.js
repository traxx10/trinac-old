import React, { PureComponent } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import styles from "./Portfolio.module.scss";

class Portfolio extends PureComponent {
  render() {
    return (
      <div className={styles.Portfolio}>
        <div className={styles.HeaderContainer}>
          <h1> Our recent works!</h1>
        </div>
        <div className={styles.ContentContainer}>
          <Grid className={styles.GridContainer} container spacing={2}></Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.ReviewsReducer.reviews
  };
};

export default connect(mapStateToProps)(Portfolio);
