import React from "react";

const FriendsCat = ({ item, onDel }) => {
  //구조 분해 할당, 비구조 할당
  const { image, name, age, id } = item;
  const path = process.env.PUBLIC_URL;
  return (
    <li>
      <figure>
        <img src={path + image} alt={name} />
        <figcaption>
          이름: {name} / 나이 : {age}
        </figcaption>
        <button onClick={() => onDel(id)}>삭제</button>
      </figure>
    </li>
  );
};

export default FriendsCat;
