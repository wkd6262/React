import React from "react";
import "./App.css";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import FixedButton from "./pages/FixedButton";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <FixedButton />
    </>
  );
};

export default App;
