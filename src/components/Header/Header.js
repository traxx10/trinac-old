import React, { PureComponent } from "react";
import Button from "@material-ui/core/Button";
import styles from "./Header.module.scss";

class Header extends PureComponent {
  render() {
    return (
      <header className={styles.Header}>
        <div className={styles.HeaderTop}>
          {/* <Button variant="contained" color="primary">
            Hello World
          </Button> */}
        </div>
        <div className={styles.WavesContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#3746D5"
              fill-opacity="1"
              d="M0,96L40,80C80,64,160,32,240,48C320,64,400,128,480,133.3C560,139,640,85,720,85.3C800,85,880,139,960,149.3C1040,160,1120,128,1200,117.3C1280,107,1360,117,1400,122.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </div>
        {/* <div className={styles.WavesContainerSecond}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#3746D5"
              fill-opacity="0.5"
              d="M0,96L40,80C80,64,160,32,240,48C320,64,400,128,480,133.3C560,139,640,85,720,85.3C800,85,880,139,960,149.3C1040,160,1120,128,1200,117.3C1280,107,1360,117,1400,122.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </div> */}
      </header>
    );
  }
}

export default Header;
