import React, { PureComponent } from "react";
import styles from "./Header.module.scss";

class Header extends PureComponent {
  render() {
    return (
      <header className={styles.Header}>
        <div className={styles.image}>
          <div className={styles.container}>
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 3841 108.5"
              className={styles.svg}
              //   style={{ overflow: 'scroll', enableBackground: }}
              //   xml:space="preserve"
            >
              <defs></defs>

              <path
                className={styles.fill}
                d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"
              />
            </svg>
          </div>
        </div>
        <div className={styles.white}></div>
      </header>
    );
  }
}

export default Header;
