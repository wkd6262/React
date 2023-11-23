import axios from "axios";
import React, { useEffect, useState } from "react";

const Async2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setErr("");
      })
      .catch((error) => {
        setData([]);
        setLoading(false);
        setErr("오류 발생");
      });
  }, [URL]);

  return (
    <>
      {loading ? (
        <h3>로딩중...</h3>
      ) : (
        <ol>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ol>
      )}
      <h3 style={{ color: "red" }}>{err && err}</h3>
    </>
  );
};

export default Async2;
