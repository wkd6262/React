import React, { useState } from "react";

const State4Form = () => {
  const [msg, setMsg] = useState("");
  return (
    <section className="borderTop">
      <h2>input value</h2>
      <input
        type="text"
        name=""
        placeholder="이 곳에 입력하세요"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button
        onClick={() => {
          alert(msg);
          setMsg("");
        }}
      >
        확인
      </button>
    </section>
  );
};

export default State4Form;
