import React from "react";

const Login = () => {
  return (
    <form>
      <h1>로그인</h1>
      아이디 :<input type="text" placeholder="아이디를 입력하세요." />
      <br />
      비밀번호 :<input type="text" placeholder="비밀번호를 입력하세요." />
      <br />
      <button>로그인</button>
      <button>회원가입</button>
    </form>
  );
};

export default Login;
