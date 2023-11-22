import React from "react";
import "./App.css";
import Main from "./survey/Main";
import DataDel1 from "./components/DataDel1";
import DataDel2 from "./components/DataDel2";
import Ex1 from "./ex/Ex1";
import Ex2 from "./ex/Ex2";
import UseRef1 from "./components/UseRef1";

const App = () => {
  return (
    <>
      <h1>리액트</h1>
      {/* <Main />
      <DataDel1 /> 
      <DataDel2 />
      <Ex1 />
      <Ex2 />
      */}
      <UseRef1 />
    </>
  );
};

export default App;
