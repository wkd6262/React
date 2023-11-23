import axios from "axios";
import React, { useEffect, useState } from "react";

const Ex1Async = () => {
  const [id, setId] = useState(null);
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);

  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  const getData = async () => {
    try {
      const res = await axios.get(url);
      setPost(res.data);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("개못하네 ㅋ");
    }
  };

  useEffect(() => {
    if (!isNaN(id)) getData();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    !isNaN(id) ? getData() : alert("숫자만.");
  };

  const changeInput = (e) => {
    const { value } = e.target;
    setId(value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="search" value={id} onChange={changeInput} />
        <button type="submit">검색</button>
      </form>

      <h3>
        {post.id}:{post.title}
      </h3>
    </>
  );
};

export default Ex1Async;
