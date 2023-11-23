import React, { useRef, useState } from "react";

const FriendsInput = ({ onAdd }) => {
  const focusRef = useRef();
  const [form, setForm] = useState({
    name: "",
    age: "",
    image: "",
  });
  const { name, age, image } = form;
  const changeInput = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  // 폼 새로고침 제거
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !image) {
      alert("내용을 입력하세요.");
      return;
    }
    onAdd(form);
    setForm({
      name: "",
      age: "",
      image: "",
    });
    focusRef.current.focus();
  };
  return (
    <div>
      <h2>고양이 입력 폼</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="catName">이름 : </label>
          <input
            type="text"
            id="catName"
            value={name}
            name="name"
            onChange={changeInput}
            ref={focusRef}
          />
        </p>
        <p>
          <label htmlFor="catAge">나이 : </label>
          <input
            type="number"
            id="catAge"
            value={age}
            name="age"
            onChange={changeInput}
          />
        </p>
        <p>
          <label htmlFor="catImg">사진 url : </label>
          <input
            type="text"
            id="catImg"
            value={image}
            name="image"
            onChange={changeInput}
          />
        </p>
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default FriendsInput;
