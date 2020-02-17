import React, { useState } from "react";
import styles from "./LoadingPage.module.scss";

function LoadingPage(props) {
  const [pushed, setPushed] = useState(false);

  //   console.log(pushed, "pushed");
  //   if (!pushed) {
  //     setPushed(true);
  //     setTimeout(() => {
  //       props.history.push("/");
  //     }, 2000);
  //   }

  return <div className={styles.LoadingPage}>LoadingPage</div>;
}

export default LoadingPage;
