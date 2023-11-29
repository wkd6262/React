import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import React from "react";
import About from "./About";

const Query = () => {
  return (
    <div>
      <h1>Query</h1>
      <p>location 객체에 들어있는 search값에서 조회</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about?detail=true&query=노트북&page=1">소개</Link>
        </li>
        <li>
          <Link to="/info">정보</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Query;
