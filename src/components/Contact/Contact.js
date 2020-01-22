import React, { PureComponent } from "react";
import { Button, Grid, Icon, TextField } from "@material-ui/core";
import styles from "./Contact.module.scss";

class Contact extends PureComponent {
  render() {
    return (
      <div className={styles.Contact}>
        <div className={styles.WavesContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              // fill="#37412D5"
              fill-opacity="1"
              d="M0,96L40,80C80,64,160,32,240,48C320,64,400,128,480,133.3C560,139,640,85,720,85.3C800,85,880,139,960,149.3C1040,160,1120,128,1200,117.3C1280,107,1360,117,1400,122.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className={styles.HeaderContainer}>
          <h1> Get in touch</h1>
        </div>
        <div className={styles.ContentContainer}>
          <Grid container>
            <Grid item xs={12} md={12} lg={3} xl={3}></Grid>
            <Grid item xs={12} md={12} lg={6} xl={6}>
              <form className={styles.FormContainer}>
                <div className={styles.FormItem}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <TextField
                        inputProps={{
                          className: styles.InputField
                        }}
                        InputLabelProps={{ className: styles.InputLabel }}
                        id="name"
                        label="Full name"
                        variant="filled"
                        className={styles.TextField}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <TextField
                        inputProps={{
                          className: styles.InputField
                        }}
                        InputLabelProps={{ className: styles.InputLabel }}
                        id="email"
                        label="Email Address"
                        variant="filled"
                        className={styles.TextField}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </div>
                <div className={styles.FormItem}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <TextField
                        inputProps={{
                          className: styles.InputField
                        }}
                        InputLabelProps={{ className: styles.InputLabel }}
                        id="project"
                        label="Project (E.g Website)"
                        variant="filled"
                        className={styles.TextField}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <TextField
                        inputProps={{
                          className: styles.InputField
                        }}
                        InputLabelProps={{ className: styles.InputLabel }}
                        id="budget"
                        label="Budget"
                        variant="filled"
                        className={styles.TextField}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </div>
                <div className={styles.FormItem}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                      <TextField
                        inputProps={{
                          className: styles.InputField
                        }}
                        InputLabelProps={{ className: styles.InputLabel }}
                        id="message"
                        label="Message Text"
                        variant="filled"
                        className={styles.TextField}
                        fullWidth
                        multiline
                        rows={8}
                      />
                    </Grid>
                  </Grid>
                </div>
                <div className={[styles.ButtonContainer]}>
                  <Button className={styles.Button}>
                    <span> SEND </span>
                  </Button>
                </div>
              </form>
            </Grid>
            <Grid item xs={12} md={12} lg={3} xl={3}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Contact;
