import React, { useState } from "react";
import Button from "./Button";
import Title from "./Title";
import Message from "./Message";

const Context = () => {
  const [lang, setLang] = useState("en");
  const handleToggle = () => {
    setLang(lang === "en" ? "Context" : "컨텍스트");
  };
  return (
    <div>
      <h2>context</h2>
      <p>전역 상태를 공유하거나 컴포넌트 간의 데이터를 전달할 때 사용</p>
      <p>사용자 로그인 정보, 앱 환경 설정, 테마 등</p>
      <hr />
      <Button lang={lang} />
      <Title lang={lang} />
      <Message lang={lang} />
    </div>
  );
};

export default Context;
