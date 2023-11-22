import { useEffect, useReducer, useRef, useState } from "react";

const UseEffect2 = () => {
  const [txt, setTxt] = useState("");
  const focusRef = useRef();

  const handleClick = () => {
    setTxt("");
  };

  useEffect(() => {
    console.log("실행");
    focusRef.current.focus();
  }, []); // 딱 한 번만 실행

  return (
    <div className="borderTop">
      <h2>useEffect2</h2>
      <input
        type="text"
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
        ref={focusRef}
      />
      <button onClick={handleClick}>클릭</button>
      <p>{txt}</p>
    </div>
  );
};

export default UseEffect2;
