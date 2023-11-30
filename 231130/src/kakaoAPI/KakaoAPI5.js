import React, { useState, useEffect } from "react";
import axios from "axios";

const KakaoAPI5 = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const TEXT = "html";
    const searchBooks = async () => {
      try {
        const response = await axios.get(
          `https://dapi.kakao.com/v3/search/book?query=${TEXT}&size=5`,
          {
            headers: {
              Authorization: "KakaoAK 21c371a0b69e4f664da67ceddce765d6",
            },
          }
        );

        setBooks(response.data.documents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    searchBooks();
  }, []);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.isbn}>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
      <a href="#">더보기</a>
    </div>
  );
};

export default KakaoAPI5;
