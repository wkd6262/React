import React from "react";
import Counter from "./Counter";
import CounterProvider from "./state/CounterContext";

const Context3 = () => {
  return (
    <div>
      <h1>Context3</h1>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
};

export default Context3;
