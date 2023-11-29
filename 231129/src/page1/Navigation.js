import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";

const Navigation = () => {
  return (
    <div>
      <h2>Navigation</h2>
      <ul>
        <li>
          {/* <a href="/">Home</a> */}
          {/* 빌드시 a태그로 변환. a와 같은 역할을 하나 새로고침 안됨 */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <a href="/about">About</a> */}
          <Link to="/about">About</Link>
        </li>
        <li>
          {/* <a href="/products">Products</a> */}
          <Link to="/products">Products</Link>
        </li>
      </ul>

      {/* 경로 설정 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default Navigation;
