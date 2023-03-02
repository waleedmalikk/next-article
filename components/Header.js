import React from "react";
import headerStyles from "../styles/Header.module.css";

function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>Next App</h1>
      <p className={headerStyles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nostrum
        iusto praesentium commodi minus placeat provident debitis eveniet
        deserunt dolor!
      </p>
    </div>
  );
}

export default Header;
