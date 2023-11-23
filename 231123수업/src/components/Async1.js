import axios from "axios";
import React, { useEffect, useState } from "react";

const Async1 = () => {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  /*   useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); //[] 의존성 배열의 영역을 비워두면 한 번만 호출 */

  //axios.get(url).then();
  /*   useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []); */

  /* useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    };
    getData();
  }, []); */
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(url);
      setData(res.data);
    };
    getData();
  }, []);

  return (
    <div>
      <h2>Async1</h2>
      <ol>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body.substr(0, 41)}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Async1;
