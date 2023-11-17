import React, { useState } from "react";
// 외부 스타일 문서
import "../assets/style/ExternalData.css";
//외부 coffeeList 적용
import coffeeList from "../assets/DB/coffeeList";

const ExternalData = () => {
  const [coffee, setCoffee] = useState(coffeeList);
  return (
    <div>
      <hr />
      <h2>외부 데이터 불러오기</h2>
      <table className="cafe">
        <caption>카페 메뉴</caption>
        <thead>
          <tr>
            <th>커피</th>
            <th>차</th>
            <th>음료</th>
            <th>기타</th>
          </tr>
        </thead>
        <tbody>
          {coffee.map(({ id, coffee, tea, drinks, others }) => (
            <tr key={id}>
              <td>{coffee}</td>
              <td>{tea}</td>
              <td>{drinks}</td>
              <td>{others}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExternalData;
