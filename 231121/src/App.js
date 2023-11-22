import React from "react";
import "./App.css";
import UseRef1 from "./components/UseRef1";
import UseRef2 from "./components/UseRef2";
import UseRef3 from "./components/UseRef3";
import UseRef4 from "./components/UseRef4";
import Todos from "./ex/Todos";
import UseEffect1 from "./components/UseEffect1";
import UseEffect2 from "./components/UseEffect2";

const App = () => {
  return (
    <>
      <h1>리액트</h1>
      {/* <Todos /> */}
      {/* <UseRef1 />
      <UseRef2 />
      <UseRef3 />
      <UseRef4 /> */}
      <UseEffect1 />
      <UseEffect2 />
    </>
  );
};

export default App;
