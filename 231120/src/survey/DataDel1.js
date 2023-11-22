import React, { useState } from "react";

const dataList = [
  { id: 1, name: "아메리카노" },
  { id: 2, name: "카페라떼" },
  { id: 3, name: "바닐라라떼" },
  { id: 4, name: "카페모카" },
  { id: 5, name: "에스프레소" },
];

const DataDel1 = () => {
  const [data, setData] = useState(dataList);

  const onDel = () => {
    //리액트의 삭제 필터 !!!!
    setData(data.filter((item) => item.name !== "카페모카"));
  };
  const onDel2 = () => {
    //리액트의 삭제 필터 !!!!
    setData(data.filter((item) => item.id !== 3));
  };
  const onDel3 = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const onAdd1 = () => {};
  const onAdd2 = () => {};

  /* 수정 Update */

  const onMod1 = () => {
    setData(
      data.map((item) => {
        if (item.id === 4) {
          return {
            ...item,
            name: "아이스 카페모카",
          };
        } else {
          return item;
        }
      })
    );
    // 카페모카 탐색 -> 아이스 카페모카 수정
  };
  const onMod2 = () => {};

  return (
    <div className="borderTop">
      <h2>데이터 삭제1</h2>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
      <p>
        <button onClick={onDel}>카페모카 삭제</button>
        <button onClick={onDel2}> 3번삭제</button>
        <button onClick={() => onDel3(1)}> 1번 삭제</button>
        <button onClick={() => onDel3(5)}> 5번 삭제</button>
        <button onClick={() => onDel3(2)}> 2번 삭제</button>
      </p>
      <p>
        <button onClick={onAdd1}>비엔나 커피 추가</button>
        <button onClick={() => onAdd2("디카페인 커피")}>
          디카페인 커피 추가{" "}
        </button>
        <button onClick={() => onAdd2("헤이즐넛 커피")}>
          헤이즐넛 커피 추가{" "}
        </button>
      </p>

      <p>
        <button onClick={onMod1}>카페모카 수정</button>
        <button>에스프레소 수정</button>
        <button>아메리카노 수정</button>
      </p>
    </div>
  );
};

export default DataDel1;
