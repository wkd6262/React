import React, { useState } from "react";
import navStyle from "../styles/Navigation.module.css";
import { BiX, BiMenuAltLeft } from "react-icons/bi";

const Navigation = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);
  return (
    <div>
      <ul className={`${navStyle.globalMenu} ${menu && navStyle.active}`}>
        <li>home</li>
        <li>about</li>
        <li>products</li>
        <li>contact</li>
      </ul>
      <div className={navStyle.mobileButton} onClick={toggleMenu}>
        {menu ? <BiX /> : <BiMenuAltLeft />}
      </div>
    </div>
  );
};

export default Navigation;
