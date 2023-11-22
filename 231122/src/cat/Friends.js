import React, { useState } from "react";
import catData from "../assets/DB/catData";
import "../assets/styles/cat.css";

const Friends = () => {
  const [cats, setCats] = useState(catData);
  const [initialCats, setInitialCats] = useState(catData);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCatName, setNewCatName] = useState("");
  const [newCatAge, setNewCatAge] = useState("");
  const [newCatImg, setNewCatImg] = useState("");

  const handleDelete = (id) => {
    const updatedCats = cats.filter((cat) => cat.id !== id);
    setCats(updatedCats);
  };

  const handleDeleteAll = () => {
    setCats([]);
  };

  const handleRestore = () => {
    setCats(initialCats);
  };

  const handleAddToggle = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const handleAddCat = () => {
    // 새로운 고양이를 추가하는 로직을 구현해야 합니다.
    // 이 예시에서는 간단히 더미 데이터를 생성하여 추가합니다.
    const newCat = {
      id: cats.length + 1,
      name: newCatName,
      age: newCatAge,
      image: "URL", // 예시 데이터
    };
    setCats((prevCats) => [...prevCats, newCat]);
    setIsAddModalOpen(false);
    // 입력값 초기화
    setNewCatName("");
    setNewCatAge("");
  };

  return (
    <div className="borderTop">
      <h2>친구들 총인원: {cats.length}</h2>
      <button className="addBtn" onClick={handleAddToggle}>
        <input type="checkbox" id="add" /> 추가 비활성
      </button>

      <ul>
        <div className="cat">
          {cats.map((cat) => (
            <li key={cat.id}>
              <img src={cat.image} alt={cat.name} />
            </li>
          ))}
        </div>
        <div className="catTxt">
          {cats.map((cat) => (
            <li key={cat.id}>
              <p>이름 : {cat.name}</p>
              <p>나이: {cat.age}살</p>
              <button onClick={() => handleDelete(cat.id)}>삭제</button>
            </li>
          ))}
        </div>
      </ul>
      <div className="bottom">
        <button onClick={handleDeleteAll} id="bottomBtn">
          모두 삭제
        </button>
        <button onClick={handleRestore} id="bottomBtn">
          초기 복구
        </button>
      </div>
      {isAddModalOpen && (
        <div className="addModal">
          <label>
            이름:
            <input
              type="text"
              value={newCatName}
              onChange={(e) => setNewCatName(e.target.value)}
            />
          </label>
          <br />
          <label>
            나이:
            <input
              type="text"
              value={newCatAge}
              onChange={(e) => setNewCatAge(e.target.value)}
            />
          </label>
          <br />
          <label>
            사진:
            <input
              type="text"
              value={newCatImg}
              onChange={(e) => setNewCatImg(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleAddCat}>추가</button>
        </div>
      )}
    </div>
  );
};

export default Friends;
