import React, { useState } from "react";

const Ex6form = () => {
  const dis = useState("");
  return (
    <section className="borderTop">
      <p>
        비밀번호의 수가 8자 이하면 버튼 비활성화(disabled), 9자 이상이면 활성화
      </p>
      아이디:
      <input type="text" />
      <br />
      비밀번호:
      <input type="password" />
      <br />
      {<button>로그인</button>}
    </section>
  );
};

export default Ex6form;
