import React, { useState } from "react";
import "./App.css";
import Friends from "./components/Friends";
import Async1 from "./components/Async1";
import Async2 from "./components/Async2";
import Async3 from "./components/Async3";
import Async4 from "./components/Async4";
import Ex1Async from "./ex/Ex1Async";
import Resize1 from "./components/Resize1";
import Resize2 from "./components/Resize2";
import SwiperCom from "./components/SwiperCom";

const App = () => {
  return (
    <>
      <h2>리액트</h2>
      {/* <Friends /> */}
      {/* <Async1 /> */}
      {/* <Async2 /> */}
      {/* <Async3 /> */}
      {/* <Async4 /> */}
      {/* <Ex1Async /> */}
      {/* <Resize1 /> */}
      {/* <Resize2 /> */}
      <SwiperCom />
    </>
  );
};

export default App;
