import React from "react";

//부모에게 함수를 받아 본문에 적용시킴.
const FriendsBtn = ({ onRemove, onReset }) => {
  return (
    //
    <div>
      <button onClick={onRemove}>모두 삭제</button>
      <button onClick={onReset}>모두 복구</button>
    </div>
  );
};

export default FriendsBtn;
