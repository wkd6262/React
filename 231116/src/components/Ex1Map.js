import React from "react";

const Ex1Map = () => {
  const colors = [
    { no: 1, bg: "tomato" },
    { no: 2, bg: "orange" },
    { no: 3, bg: "salmon" },
    { no: 4, bg: "lightblue" },
  ];

  return (
    <div className="borderTop">
      <h2 className="margin-10">.map() 연습</h2>
      <ul style={{ margin: 0 }}>
        <li>색상명 출력</li>
      </ul>
      <ul>
        {colors.map((color) => {
          const { no, bg } = color;
          /* <li key={colors.no} style={{ backgroundColor: colors.bg }}>
            {colors.bg}
          </li> */
          return (
            <li key={no} style={{ backgroundColor: bg }}>
              {bg}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Ex1Map;
