import { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsList = ({ category }) => {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const newData = async () => {
      try {
        const URL = "https://newsapi.org/v2/top-headlines?country=kr";
        const query = category === "all" ? "" : "&category=" + category;
        const APPKEY = "&apiKey=bba4464f15244d14ae6d0a2b63ea39b0";

        const res = await axios.get(URL + query + APPKEY);
        setArticle(res.data.articles);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    newData();
  }, [category]);

  if (loading) {
    return <h2>불러오는 중.....</h2>;
  }

  return (
    <div>
      {article.map((news) => (
        <NewsItem key={news.publishedAt} news={news} />
      ))}
    </div>
  );
};

export default NewsList;
