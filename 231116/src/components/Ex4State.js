import React, { useState } from "react";

const btnStyle = {
  border: "1px solid #000",
  backgroundColor: "#fff",
  padding: 10,
  fontWeight: "bold",
};
const colors = [
  { id: 1, bg: "skyblue" },
  { id: 2, bg: "blue" },
  { id: 3, bg: "green" },
  { id: 4, bg: "seagreen" },
];

const Ex4State = () => {
  const [name, setName] = useState("버튼1");
  const [arr, setArr] = useState(colors);

  //컬러 배열에 객체 추가
  const addColor = () => {
    const newColor = [...arr, { id: 5, bg: "maroon" }];
    // newColor[4] = { id: 5, bg: "maroon" };
    setArr(newColor);
    // console.log(arr);
  };
  return (
    <section className="borderTop">
      <h2>Ex4 - state</h2>
      {/* 클릭 이벤트를 통해  name 값이 버튼1, 버튼2로 토글 출력 */}
      <button
        style={btnStyle}
        onClick={() => (name === "버튼2" ? setName("버튼1") : setName("버튼2"))}
      >
        {name}
      </button>
      <hr />
      {/* 버튼을 클릭하면 제일 마지막 줄에 색상 추가 */}
      <button style={btnStyle} onClick={addColor}>
        maroon 색상 추가
      </button>
      <ul>
        {arr.map((color) => {
          const { id, bg } = color;
          return (
            <li key={id} style={{ backgroundColor: bg }}>
              {bg}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Ex4State;
