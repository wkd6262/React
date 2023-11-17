import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: ${(사용자지정이름) => 사용자지정이름.wt};
  border: 1px solid #000;
  margin: 20px auto;
  background-color: ${(i) => (i.bg ? i.bg : "orange")};
`;

const Title = styled.h2`
  text-align: center;
`;

const Box = styled.button`
  text-align: center;
  background-color: ${(i) => (i.bgcolor ? i.bgcolor : "pink")};
  border: none;
  margin: 10px;
  padding: 5px 10px;
  width: ${(i) => (i.width ? i.width : "100px")};
  /* 조건부 스타일링
    ${(속성) => 속성.primary && css``} 속성.primary가 true일 때 적용
  */
  ${(i) =>
    i.primary &&
    css`
      background-color: #000;
      color: #fff;
      width: 80%;
      display: block;
      &:hover {
        background-color: grey;
      }
    `}
`;

const Style3Com = () => {
  return (
    // 사용자 정의 props 명 -> wt
    <Wrapper wt="70vw" bg="#ddd">
      <Title>styled-components</Title>
      <Box width="120px" bgcolor="tomato">
        box1
      </Box>
      <Box width="200px" bgcolor="skyblue">
        box2
      </Box>
      <Box>box3</Box>
      <Box primary>box4</Box>
    </Wrapper>
  );
};

export default Style3Com;
