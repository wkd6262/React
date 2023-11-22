import { useState } from "react";

const Ex1 = () => {
  const [data, setData] = useState([]);

  const onAdd = () => {
    const ran = Math.floor(Math.random() * 10 + 1);
    setData([...data, { id: data.length + 1, text: "음료" + ran }]);
  };
  const onDel = () => {
    setData(data.filter((item) => item.id !== 3));
  };

  return (
    // 음료 추가 버튼 클릭시 음료x 출력
    // 삭제 버튼 클릭시 아이디 3번 음료 삭제
    <div className="borderTop">
      <button onClick={onAdd}>음료 추가</button>
      <button onClick={onDel}>아이디 3번 음료 삭제</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} : {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ex1;
