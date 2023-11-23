import axios from "axios";
import React, { useEffect, useState } from "react";

const Async3 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const getData = async () => {
      try {
        //응답 성공
        const res = await axios.get(url);
        setData(res.data);
        setLoading(false);
        setErr(null);
      } catch (err) {
        //응답실패
        setErr(err);
      }
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) return <h3>로딩중 ㅋ</h3>;
  if (err)
    return (
      <img src="https://ccimg.hellomarket.com/images/2020/item/09/06/16/4942998_5081462_1.jpg?size=s6&f=webp"></img>
    );
  return (
    <ol>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ol>
  );
};

export default Async3;
