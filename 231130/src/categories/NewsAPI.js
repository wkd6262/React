import React, { useState } from "react";
import Categori from "./Categori";
import NewsList from "./NewsList";
import { Route, Routes } from "react-router-dom";
import NewPage from "./NewPage";

const NewsAPI = () => {
  const [category, setCategory] = useState("all");

  const onSelect = () => {
    return (newCategory) => setCategory(newCategory);
  };
  return (
    <div>
      <h2>NewsAPI</h2>
      {/* <Categori category={category} onSelect={onSelect} />
</Link>
      <NewsList category={category} /> */}
      <Routes>
        {/*
           :category 실제 매개변수 이름
           ? 해당 매개변수가 선택적임을 나타내는 값. 이 값을 쓰려면 useParams 사용시 반드시 필요
          */}
        <Route path="/:category?" element={<NewPage />} />
      </Routes>
    </div>
  );
};

export default NewsAPI;
