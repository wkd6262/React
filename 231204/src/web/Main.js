import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import styles from "../asset/style/main.module.css";

const Main = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {console.log(children)}
      <Nav />
      <div className={styles.mainBg}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Main;
