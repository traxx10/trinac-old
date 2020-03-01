import React, { useState } from "react";
import { connect } from "react-redux";
import Img from "react-image";
import Lottie from "react-lottie";
import animationData from "../../assets/lottie/bouncing.json";

import styles from "./LoadingPage.module.scss";

function LoadingPage(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={styles.LoadingPage}>
      <div className={styles.LogoBox}>
        <Img
          className={styles.Logo}
          src={require("../../assets/logo/trinac-logo-white.svg")}
        />
      </div>
      <Lottie
        eventListeners={[
          {
            eventName: "complete",
            callback: () => console.log("the animation completed:")
          }
        ]}
        options={defaultOptions}
        height={300}
        width={300}
      />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    dimension: state.HomePageReducer.dimension
  };
};

export default connect(mapStateToProps)(LoadingPage);
