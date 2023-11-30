import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import KakaoAPI from "./KakaoAPI1";
import "./home.css";
import KakaoAPI2 from "./KakaoAPI2";
import KakaoAPI3 from "./KakaoAPI3";
import KakaoAPI4 from "./KakaoAPI4";
import KakaoAPI5 from "./KakaoAPI5";
import KakaoAPI6 from "./KakaoAPI6";
import KakaoAPI7 from "./KakaoAPI7";
import KakaoAPI8 from "./KakaoAPI8";
const Home = () => {
  const ACTIVE = "active";

  const bgColor = document.querySelectorAll(".bg");

  const click = (e) => {
    bgColor.forEach((i) => i.classList.remove(ACTIVE));
    e.target.classList.add(ACTIVE);
  };
  return (
    <div>
      <h1>kakao API</h1>
      <ul>
        <li className="title">
          <Link to="/" className="bg" onClick={click}>
            한강
          </Link>
          <Link to="/2" className="bg" onClick={click}>
            백희나
          </Link>
          <Link to="/3" className="bg" onClick={click}>
            청소
          </Link>
          <Link to="/4" className="bg" onClick={click}>
            제인구달
          </Link>
          <Link to="/5" className="bg" onClick={click}>
            html
          </Link>
          <Link to="/6" className="bg" onClick={click}>
            node
          </Link>
          <Link to="/7" className="bg" onClick={click}>
            SQL
          </Link>
          <Link to="/8" className="bg" onClick={click}>
            java
          </Link>
        </li>
        <hr />
      </ul>
      <Routes>
        <Route path="/" element={<KakaoAPI />} />
        <Route path="/2" element={<KakaoAPI2 />} />
        <Route path="/3" element={<KakaoAPI3 />} />
        <Route path="/4" element={<KakaoAPI4 />} />
        <Route path="/5" element={<KakaoAPI5 />} />
        <Route path="/6" element={<KakaoAPI6 />} />
        <Route path="/7" element={<KakaoAPI7 />} />
        <Route path="/8" element={<KakaoAPI8 />} />
      </Routes>
    </div>
  );
};

export default Home;
