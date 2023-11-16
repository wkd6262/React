import React, { useState } from "react";

const State2 = () => {
  // 상태값을 각각 사용시 따로 작성
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);
  const [toggle, setToggle] = useState(true);
  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setHide(false);
  };
  const handleToggle = () => {
    // 토글만 아니면 돼! - show, hide
    setToggle(!toggle); //! 부정연산자, !false -> true, !true
  };

  return (
    <div className="borderTop">
      <h2>state2</h2>
      <p>
        <button onClick={handleShow}>{show ? "show" : "hide"}</button>
        <button onClick={handleHide}>{hide ? "show" : "hide"}</button>
        {/* 토글버튼 만들기 */}
        <button onClick={handleToggle}>{toggle ? "hide" : "show"}</button>
      </p>
      {/* 삼항을 통해 handleShow 함수가 실행되어 참인 경우 박스가 보임 */}
      {show ? (
        <div
          style={{
            width: 150,
            height: 150,
            backgroundColor: "skyblue",
            margin: 10,
          }}
        >
          box1
        </div>
      ) : null}
      {hide ? null : (
        <div
          style={{
            width: 150,
            height: 150,
            backgroundColor: "blue",
            margin: 10,
          }}
        >
          box2
        </div>
      )}
      <hr />
      {toggle && (
        <div
          style={{
            width: 150,
            height: 150,
            backgroundColor: "red",
            margin: 10,
          }}
        >
          box3
        </div>
      )}
      {/* OR연산자: 앞의 값이참인 상황이면 뒤의 값을 출력하지 않음
        앞의 값이 거짓이어야만 뒤의 값출력
      */}
      {toggle || (
        <div
          style={{
            width: 150,
            height: 150,
            backgroundColor: "salmon",
            margin: 10,
          }}
        >
          box4
        </div>
      )}
    </div>
  );
};

export default State2;
