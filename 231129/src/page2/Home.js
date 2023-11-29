import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Products from "./Products";
import Board from "./Board";
import NotFoundPage from "./NotFoundPage";
import Nav from "./Nav";

const Home = () => {
  return (
    <div>
      {/* 화면 설정 */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="/pro" element={<Products />} />
        <Route path="/board" element={<Board />} />
        {/* 잘못된 페이지 연결시 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* 내비게이션 */}
      <Nav />
    </div>
  );
};

export default Home;
