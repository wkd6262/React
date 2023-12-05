import { useState } from "react";
import Page from "./Page";
import { UserData } from "./state/UserData";
import { ThemeContext } from "./state/ThemeContext";

// useContext hook을 이용하여 컴포넌트들의 상태, 스타일 공유
const Contenxt2 = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserData.Provider value={"리액트"}>
      <h1>Context2</h1>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserData.Provider>
  );
};

export default Contenxt2;
