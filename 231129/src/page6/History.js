import React from "react";
import { useNavigate } from "react-router-dom";
const History = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const goBack = () => navigate(-1);
  const goForward = () => navigate(+1);
  return (
    <div>
      <button onClick={goBack}>뒤로</button>
      <button onClick={goHome}>홈으로</button>
      <button onClick={goForward}>앞으로</button>
    </div>
  );
};

export default History;
