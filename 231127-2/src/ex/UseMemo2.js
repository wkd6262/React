import React, { useMemo, useState } from "react";

const UseMemo2 = () => {
  //토글버튼 개쉬움 ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ
  const [menu, setMenu] = useState(false);
  const [num, setNum] = useState(0);

  const light = (menu) => {
    return menu ? "어" : "싫어";
  };

  // light(menu); 렌더링이 될 때 마다 새로운 값을 구함. 그래서 물의 양을 수정하면 같이 렌더링 된다. 안 좋음!
  useMemo(() => {
    return light(menu);
  }, [menu]);

  return (
    <div>
      <h2>하루에 마시는 물의 양은?</h2>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <hr />
      <h2>동생~</h2>
      <p>불 좀 꺼 줘</p>
      {/* //토글버튼 개쉬움 ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ */}
      <button onClick={() => setMenu(!menu)}>{menu ? "응" : "..."}</button>
    </div>
  );
};

export default UseMemo2;
