import React from "react";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
