import React from "react";

const map = () => {
  const arr = ["라떼", "아메리카노", "바닐라라떼", "에스프레소", "모카"];
  const data = [
    { id: 2, name: "라떼" },
    { id: 1, name: "아메리카노" },
    { id: 3, name: "모카" },
    { id: 4, name: "바닐라라떼" },
    { id: 5, name: "에스프레소" },
  ];
  return (
    <div className="borderTop">
      <h2>map()</h2>
      {/*
        .map((elem, idx)=>{});
        ㄴ 새로운 배열로 반환
        ㄴ .map() 사용시 고유한 key 값을 부여해야 함
        ㄴ index의 경우 단순 출력이 필요한 경우만 사용 권장
        ㄴ 삭제, 수정, 추가 등에서는 index가 아닌 key 혹은 고유 id 사용
        ㄴ 대부분 안정적인 고유성을 부여하기 위해 배열 내부 요소에 id를 작성하여 key로 사용
      */}

      {/* <li>라떼</li> <li>아메리카노</li> ... */}
      <ul>
        {arr.map((data, idx) => (
          <li key={idx}>{data}</li>
        ))}
      </ul>
      <ul>
        {data.map((data) => {
          return <li key={data.id}>{data.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default map;
