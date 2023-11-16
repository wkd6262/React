import React, { useState } from "react";

const State1 = () => {
  const [name, setName] = useState("메뉴");
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("똥");

  const onCoffee1 = () => setName("아메리카노");
  const onCoffee2 = () => setName("라떼");
  const onCoffee3 = () => setName("노른자 깔쌈하게 올린 쌍화탕");

  const onColor1 = () => setColor("orange");
  const onColor2 = () => setColor("tomato");
  const onColor3 = () => setColor("skyblue");

  return (
    <div className="borderTop">
      <h2>State1 상태</h2>
      <h3 style={{ backgroundColor: color }}>
        커피: {name} / 가격: {price}원 / 색상: {color}
      </h3>
      <p>
        <button onClick={onCoffee1}>아메리카노</button>
        <button onClick={onCoffee2}>라떼</button>
        <button onClick={onCoffee3}>바닐라라떼</button>
      </p>
      <p>
        <button onClick={() => setPrice(1200)}>1200</button>
        <button onClick={() => setPrice(1300)}>1300</button>
        <button onClick={() => setPrice(1500)}>1500</button>
      </p>
      <p>
        <button onClick={onColor1}>orange</button>
        <button onClick={onColor2}>tomato</button>
        <button onClick={onColor3}>skyblue</button>
      </p>
    </div>
  );
};

export default State1;

/* 
  state
   상태. 상대 변화를 위해 사용하는 hook
   렌더링이 될 때 마다 화면에 새롭게 그려내는 방식이므로 상태 유지를 하지 못함
   새롭게 재 렌더링 되어 함수 변수 등 다시 초기화 됨
   그래서 값을 유지하기 위해 hook을 사용
   상태 값이 변경되는 경우 useState()

   const [state, setState] = useState(초기값);
   const [상태데이터(변수), 상태값을 변경하기 위한 함수] = useState(초기값);
   초기값 : 숫자, 문자, 논리, 배열, 객체 등등
*/
