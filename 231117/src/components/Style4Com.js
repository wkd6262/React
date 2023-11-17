import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 50vh;
  background-color: black;
  width: 100%;
  display: grid;
  place-items: center;
`;
//실행 컴포넌트 앞에 작성

const mov = keyframes`
  0%, 100% {transform: translateY(0)}
  25% { transform:translateY(-20px) rotate(20deg)}
  50% { transform:translateY(20px)}
  75% { transform:translateY(-20px) rotate(-20deg)}
`;

const Rabbit = styled.div`
  font-size: 5rem;
  animation: ${mov} 0.5s infinite ease-in-out;
`;

const Style4Com = () => {
  return (
    <Container>
      <h1 style={{ color: "#fff" }}>Pikaboo!</h1>
      <Rabbit>👻</Rabbit>
    </Container>
  );
};

export default Style4Com;
