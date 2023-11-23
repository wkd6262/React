import React from "react";
import FriendsCat from "./FriendsCat";

const FriendsList = ({ data, onDel }) => {
  return (
    <ul>
      {data.map((item) => (
        <FriendsCat key={item.id} item={item} onDel={onDel} />
      ))}
    </ul>
  );
};

export default FriendsList;
