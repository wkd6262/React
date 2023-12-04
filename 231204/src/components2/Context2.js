import React, { useState } from "react";
import Button from "./Button";
import Message from "./Message";
import Title from "./Title";
import LangContext from "./LangContext";

const Context2 = () => {
  const [lang, setLang] = useState("en");
  const handleToggle = () => {
    setLang(lang === "en" ? "kr" : "en");
  };

  return (
    <LangContext.Provider value={lang}>
      <Button lang={lang} handleToggle={handleToggle} />
      <Message />
      <Title />
    </LangContext.Provider>
  );
};

export default Context2;
/* 
  .Provider: 컨텍스트 값 제공
  Provider로 하위 컴포넌트를 감싸면 React.createContext()에 저장한 전역데이터에 접근 가능.
  <MyContext.Provider value={어떤 값이든 제공}>
  <하위 컴포넌트>
  </MyContext.Provider>

  접근)
  .useContext();
  .Consumer
*/
