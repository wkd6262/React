import { Link, Routes, Route } from "react-router-dom";
import Menu from "./Menu";

const Params = () => {
  return (
    <div>
      <h1>useParams</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        {/* 
          "/*" 모든 경로, "/menu/*" 메뉴 뒤에 오는 모든 경로 
          서브 라우터 구성시 주로 사용
        */}
        <Route path="/menu/*" element={<Menu />} />
      </Routes>
    </div>
  );
};

export default Params;
