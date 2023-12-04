import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Logo from "../asset/images/google_logo.svg";
import navStyle from "../asset/style/nav.module.scss";
import { AiFillExclamationCircle } from "react-icons/ai";
import { AiFillMeh } from "react-icons/ai";
import { AiFillNotification } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

const onDeco = ({ isActive }) => {
  return {
    textDecoration: isActive && "underline",
  };
};

const Nav = () => {
  return (
    <>
      <h1 className={navStyle.logo}>
        <Link to="/">
          <img src={Logo} alt="로고" />
        </Link>
      </h1>
      <ul className={navStyle.globalNav}>
        <li>
          {/* navlink는 true,false - 이것을 통해 누른 효과 스타일 적용 가능 쓸데없이 .active 함수 안 만들어도 된다!*/}
          <NavLink to="/about" style={onDeco}>
            {" "}
            <AiFillNotification />
            회사소개
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" style={onDeco}>
            {" "}
            <AiFillThunderbolt />
            제품
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" style={onDeco}>
            {" "}
            <AiFillLike />
            서비스
          </NavLink>
        </li>
        <li>
          <NavLink to="/board" style={onDeco}>
            <AiFillExclamationCircle />
            게시판
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" style={onDeco}>
            <AiFillMeh />
            로그인
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;
