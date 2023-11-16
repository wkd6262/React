import React, { useState } from "react";

const State5Form = () => {
  //내용이 입력될 때 마다 상태를 감지할 수 있게.
  const [txt, setTxt] = useState("");

  // 내용이 추가 될 때 마다 상태를 감지할 수 있게
  const [data, setData] = useState([]);

  //사용자가 입력하는 값을 받아 다시 사용할 수 있게 txt로 반환
  const listItem = (e) => {
    // const val = e.target.value;
    const { value } = e.target;
    setTxt(value);
  };
  //내용 추가 함수
  const addItems = () => {
    if (txt === "") {
      alert("내용을 입력하지 않았습니다.");
      return;
    }
    setData((prev) => {
      return [...prev, { id: prev.length, text: txt }];
    });
    setTxt("");
  };

  return (
    <section className="borderTop">
      <h2>state</h2>
      {/* onchange 텍스트 필드값이 변경될 때 마다 함수 listItem 실행 */}
      <input
        type="text"
        value={txt}
        onChange={listItem}
        placeholder="내용 추가"
      />
      <button onClick={addItems}>추가</button>
      <hr />
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
};

export default State5Form;
