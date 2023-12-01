import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import "./Ex1.css";
import Product from "./Product";
import Service from "./Service";
import Board from "./Board";
import Login from "./Login";

const Ex1 = () => {
  useEffect(() => {
    const main = document.querySelector(".main");
    main.classList.add("hide");

    const about = document.querySelector(".about");
    const li = document.querySelector("ul li");
    const logo = document.querySelector(".logo");
    li.addEventListener("click", () => {
      main.classList.remove("hide");
      about.classList.add("hide");
    });

    logo.addEventListener("click", () => {
      main.classList.add("hide");
      about.classList.remove("hide");
    });
  }, []);

  return (
    <div className="home">
      <Link to="/" className="logo">
        로고
      </Link>
      <ul>
        <li>
          <Link to="/about">G About</Link>
        </li>
        <li>
          <Link to="/product">◍ product</Link>
        </li>
        <li>
          <Link to="/service">service</Link>
        </li>
        <li>
          <Link to="/board">board</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="/board" element={<Board />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="about">
        <h3>About</h3>
      </div>
      <div className="main">
        <h3>Main intro</h3>
      </div>
      <div className="footer">
        <h3>Footer</h3>
      </div>
    </div>
  );
};

export default Ex1;
