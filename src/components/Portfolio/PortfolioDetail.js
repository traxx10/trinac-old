import React from "react";
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
import { ThreeBounce } from "better-react-spinkit";
import Img from "react-image";
import styles from "./PortfolioDetail.module.scss";
import Footer from "../Footer/Footer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#000"
  },
  title: {
    flexGrow: 1,
    color: "#000",
    textTransform: "capitalize",
    fontSize: 18
  }
}));

function PortfolioDetail(props) {
  const classes = useStyles();
  const { data } = props.location.state;

  return (
    <>
      <div className={styles.PortfolioDetail}>
        <AppBar style={{ backgroundColor: "#fff" }} position="static">
          <Toolbar>
            <IconButton
              onClick={() => props.history.goBack()}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ArrowBackIcon style={{ fontSize: 25 }} />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {`${data.title}`} 😎
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={styles.Content}>
          <Grid className={styles.GridContainer} container spacing={0}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}></Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Card className={styles.Card}>
                <div className={styles.ImageContainer}>
                  <Img
                    loader={
                      <div className={styles.LoaderContainer}>
                        <ThreeBounce size={15} />
                      </div>
                    }
                    src={data.url}
                    className={styles.Image}
                  />
                </div>
                <div className={styles.ParagrahContainer}>
                  <p>
                    Velit exercitation enim cupidatat sint. Ut consequat amet
                    anim consequat minim ad ex culpa nulla magna ullamco eu.
                    Occaecat magna deserunt dolore occaecat irure eu anim fugiat
                    deserunt cillum mollit sint veniam labore. Velit
                    exercitation enim cupidatat sint. Ut consequat amet anim
                    consequat minim ad ex culpa nulla magna ullamco eu. Occaecat
                    magna deserunt dolore occaecat irure eu anim fugiat deserunt
                    cillum mollit sint veniam labore.
                  </p>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}></Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PortfolioDetail;
