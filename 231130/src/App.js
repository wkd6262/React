import React from "react";
import "./App.css";
import NewsAPI from "./categories/NewsAPI";
import KakaoAPI from "./kakaoAPI/KakaoAPI1";
import Home from "./kakaoAPI/Home";

const App = () => {
  return (
    <>
      {/* <NewsAPI /> */}
      {/* <KakaoAPI /> */}
      <Home />
    </>
  );
};

export default App;
