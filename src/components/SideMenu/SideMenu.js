import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Img from "react-image";
import styles from "./SideMenu.module.scss";

class SideMenu extends PureComponent {
  render() {
    return (
      <div className={styles.Container}>
        <div className={styles.HeaderTop}>
          <div className={styles.LogoContainer}>
            <Link onClick={() => this.props.onMenuPress()} to={`/`}>
              <Img
                className={styles.Logo}
                src={require("../../assets/logo/trinac-logo-white.svg")}
              />
            </Link>
          </div>
        </div>
        <div className={styles.MenuItems}>
          <div className={styles.MenuItemContainers}>
            {" "}
            <HashLink
              onClick={() => this.props.onMenuPress()}
              className={styles.MenuItem}
              to="/#process"
              scroll={el =>
                el.scrollIntoView({ behavior: "smooth", block: "end" })
              }
            >
              Process
            </HashLink>
          </div>
          <div className={styles.MenuItemContainers}>
            {" "}
            <HashLink
              onClick={() => this.props.onMenuPress()}
              className={styles.MenuItem}
              to="/#services"
              scroll={el =>
                el.scrollIntoView({ behavior: "smooth", block: "end" })
              }
            >
              Services
            </HashLink>
          </div>
          <div className={styles.MenuItemContainers}>
            <HashLink
              onClick={() => this.props.onMenuPress()}
              className={styles.MenuItem}
              to="/#portfolio"
              scroll={el =>
                el.scrollIntoView({ behavior: "smooth", block: "end" })
              }
            >
              Portfolio
            </HashLink>
          </div>
          <div className={styles.MenuItemContainers}>
            {" "}
            <HashLink
              onClick={() => this.props.onMenuPress()}
              className={styles.MenuItem}
              to="/#reviews"
              scroll={el =>
                el.scrollIntoView({ behavior: "smooth", block: "end" })
              }
            >
              Reviews
            </HashLink>
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;
