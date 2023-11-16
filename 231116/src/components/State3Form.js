import React, { useState } from "react";

const State3Form = () => {
  const [isChk, setIsChk] = useState(false);
  const onCheck = (e) => {
    const { checked } = e.target;
    setIsChk(checked);
  };
  return (
    <section className="borderTop">
      <h2>오늘의 할 일</h2>
      <p
        style={{
          fontWeight: "bold",
          textDecoration: isChk ? "line-through" : "none",
          backgroundColor: isChk ? "#ddd" : "orange",
        }}
      >
        <label>
          <input type="checkbox" onChange={onCheck} checked={isChk} /> 우산
          챙기기
        </label>
      </p>
    </section>
  );
};

export default State3Form;
