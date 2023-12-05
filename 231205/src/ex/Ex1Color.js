import React from "react";
import ColorContext, { ColorProvider } from "../context1/Color";
import Color from "./Color";

const Ex1Color = () => {
  return (
    <>
      <ColorProvider>
        <Color />
      </ColorProvider>
    </>
  );
};

export default Ex1Color;
