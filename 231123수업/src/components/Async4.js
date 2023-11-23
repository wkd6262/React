import axios from "axios";
import React, { useEffect, useState } from "react";

const Async4 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "bba4464f15244d14ae6d0a2b63ea39b0";

  const url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data.articles);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError("데이터를 불러오는 중 에러가 발생");
      }
      setLoading(false);
    };
    getData();
  }, [url]);

  if (loading) return <h2>로오딩중..</h2>;
  if (error) return <h2>에러 ㅋㅋ</h2>;
  return (
    <>
      <ul>
        {data.map((news) => (
          <li key={news.publishedAt}>
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              <img
                src={news.urlToImage}
                alt={news.title}
                style={{ width: 200 }}
              />
              <h3>{news.title}</h3>
              <p>{news.description}</p>
            </a>
          </li>
        ))}
      </ul>
      <h3 style={{ color: "red" }}>{error && error}</h3>
    </>
  );
};

export default Async4;
