import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 80vw;
  border: 1px solid #000;
  margin: 50px auto;
  padding: 20px;
`;
const Title = styled.h2`
  font-family: "Pretendard", "나눔고딕", sans-serif;
  text-align: center;
  border-bottom: solid 5px #000;
`;
const Button = styled.button`
  border: none;
  cursor: pointer;
  margin: 10px 20px;
  padding: 10px 20px;
  width: 100px;
  height: 100px;
  transition: 0.2s;
  font-size: 1.2rem;
  border-radius: 50%;
  &:hover {
    background-color: #83a2ff;
  }
  &.plus::after {
    content: "👍";
  }
  &.minus::after {
    content: "👎";
  }
  &.disable {
    background-color: red;
    filter: grayscale(50%);
  }
`;

/* const Button = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid black;
  font-size: 3rem;
  background: linear-gradient(red 50%, blue 50%);
  transition: 0.5s;

  &:active {
    background: linear-gradient(red 50%, white 50%);
    transition: 0.5s;
  }
`;

const Box = styled.div`
  width: 300px;
  height: 200px;
  background-color: skyblue;
`;
 */
const Ex1Style = () => {
  const [count, setCount] = useState(0);
  const [min, setMinus] = useState(0);
  const [plu, setPlu] = useState(10);
  const plus = () => {
    setCount(count >= plu ? plu : count + 1);
  };
  const minus = () => {
    setCount(count === min ? min : count - 1);
  };

  /* const [count, setCount] = useState(0);
  // 초기값은 0
  const isCount = () => {
    if (count < 18) {
      // 카운트가 6미만이면 1 증가
      setCount(count + 1);
    }
  };

  const noCount = () => {
    if (count > 6) {
      setCount(count - 1);
    }
  }; */
  return (
    <Box>
      {/* 6이하, 18이상으로 커지면 버튼 비활성화  */}
      <Title>count : {count}</Title>
      {/* 이 버튼을 클릭하면 1 씩 증가 */}
      <Button className="plus" onClick={plus} disabled={count === plu}></Button>
      {/* 이 버튼을 클릭하면 1 씩 감소 */}
      <Button
        className="minus"
        onClick={minus}
        disabled={count === min}
      ></Button>
    </Box>
  );
};

export default Ex1Style;
