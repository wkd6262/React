import React, { useState } from "react";

const Ex2State = () => {
  const [bgcolor, setBgcolor] = useState("#ddd");
  const boxStyle = {
    border: "1px solid #000",
    width: 100,
    height: 100,
    margin: 10,
  };
  const handleColor = () =>
    setBgcolor(bgcolor === "orange" ? "tomato" : "orange");
  return (
    <section className="borderTop">
      <h2>Ex2 - state</h2>

      <div
        style={(boxStyle, { backgroundColor: bgcolor })}
        onClick={handleColor}
      >
        box color:{bgcolor}
      </div>
    </section>
  );
};

export default Ex2State;
