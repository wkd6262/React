import React from "react";

const FriendList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <CatDB key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default FriendList;
