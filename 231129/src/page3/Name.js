import { Link, Route, Routes } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import About from "./About";
import Profile from "./Profile";
import Products from "./Products";
import Home from "./Home";

const data = [
  { id: 1, title: "html", info: "html 페이지 입니다." },
  { id: 2, title: "css", info: "css 페이지 입니다." },
  { id: 3, title: "js", info: "js 페이지 입니다." },
  { id: 4, title: "react", info: "react 페이지 입니다." },
];

const Name = () => {
  return (
    <div>
      {/* 내비게이션 */}
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile">프로필</Link>
        </li>
        <li>
          <hr />
          <ul>
            <li>
              <Link to="/products/html">html</Link>
            </li>
            <li>
              <Link to="/products/css">css</Link>
            </li>
            <li>
              <Link to="/products/js">js</Link>
            </li>
            <li>
              <Link to="/products/react">react</Link>
            </li>
          </ul>
        </li>
      </ul>

      {/* 화면 설정: 첫페이지, 어바웃, 프로필, 제품(>html, css, js, react) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        {/* useParams을 이용해 name값을 가져옴 */}
        <Route path="/products/:name" element={<Products data={data} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default Name;
