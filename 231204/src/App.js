import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./web/Home";
import About from "./web/About";
import Product from "./web/Product";
import Service from "./web/Service";
import NotFound from "./web/NotFound";
import Board from "./web/Board";
import Login from "./web/Login";
import Main from "./web/Main";

const App = () => {
  return (
    <>
      {/* 공통된 레이아웃을 구성할떄 주로 사용 */}
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service" element={<Service />} />
          <Route path="/board" element={<Board />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
