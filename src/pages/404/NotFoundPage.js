import React, { useState } from "react";
import { connect } from "react-redux";
import Img from "react-image";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  IconButton,
  Card
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import animationData from "../../assets/lottie/notFound.json";
import styles from "./NotFoundPage.module.scss";
import Footer from "../../components/Footer/Footer.js";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(4),
    color: "#fff"
  },
  title: {
    flexGrow: 1,
    color: "#fff",
    textTransform: "capitalize",
    fontSize: 18
  }
}));

function NotFoundPage(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const classes = useStyles();

  return (
    <>
      <AppBar style={{ backgroundColor: "#3746d5" }} position="static">
        <Toolbar>
          <IconButton
            onClick={() => props.history.push("/")}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <ArrowBackIcon style={{ fontSize: 25 }} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {`Not Found`} 😔
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={styles.NotFoundPage}>
        <p> The Page You Requested Does Not Exist!</p>
        <Lottie
          eventListeners={[
            {
              eventName: "complete",
              callback: () => console.log("the animation completed:")
            }
          ]}
          options={defaultOptions}
          height={240}
          width={240}
        />
      </div>
      {/* <Footer /> */}
    </>
  );
}
const mapStateToProps = state => {
  return {
    dimension: state.HomePageReducer.dimension
  };
};

export default connect(mapStateToProps)(NotFoundPage);
