import React, { useState } from "react";

const dataList = [
  {
    id: "a1",
    name: "chk1",
    text: "연령(만 14세 이상) 확인(필수)",
    isChk: true,
  },
  { id: "a2", name: "chk2", text: "증권플러스 이용약관(필수)", isChk: false },
  {
    id: "a3",
    name: "chk3",
    text: "개인정보 수집 및 이용에 대한 동의(필수)",
    isChk: false,
  },
  { id: "a4", name: "chk4", text: "이벤트 우대 혜택 안내(필수)", isChk: false },
];

const Ex2 = () => {
  const [data, setData] = useState(dataList);

  const changeInput = (e) => {
    const { name, checked } = e.target;
    if (name === "all") {
      setData(
        data.map((item) => {
          return { ...item, isChk: checked };
        })
      );
    } else {
      setData(
        data.map((item) =>
          item.name === name ? { ...item, isChk: checked } : item
        )
      );
    }
  };

  return (
    <div className="borderTop">
      {/* 전체 동의 체크박스 클릭시 전체 체크, 해제시 전체 체크 해제 */}
      <h2>Ex2 - 약관동의</h2>
      <p>
        <input
          type="checkbox"
          name="all"
          id="all"
          onChange={changeInput}
          checked={data.filter((item) => item.isChk !== true).length < 1}
        />
        <label htmlFor="all">전체 동의</label>
      </p>
      <hr />
      {data.map((item) => (
        <p key={item.id}>
          <input
            type="checkbox"
            id={item.name}
            name={item.name}
            onChange={changeInput}
            checked={item.isChk}
          />
          <label htmlFor={item.name}>{item.text}</label>
        </p>
      ))}
    </div>
  );
};

export default Ex2;
