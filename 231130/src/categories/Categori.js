import { Link, NavLink } from "react-router-dom";
import myStyle from "./categori.module.css";
const categories = [
  { name: "all", trans: "전체보기" },
  { name: "business", trans: "비즈니스" },
  { name: "entertainment", trans: "연예" },
  { name: "general", trans: "일반" },
  { name: "health", trans: "건강" },
  { name: "science", trans: "과학" },
  { name: "sports", trans: "스포츠" },
  { name: "technology", trans: "기술" },
];

const Categori = ({ category, onSelect }) => {
  return (
    <ul className={myStyle.categoriesWrapper}>
      {/* {categories.map((item) => (
        <li key={item.name} onClick={() => onSelect(item.name)}>
          <strong className={category === item.name ? `${myStyle.active}` : ""}>
            {item.trans}
          </strong>
        </li>
      ))} */}
      {categories.map((item) => (
        <li key={item.name}>
          {/* <Link to="/">{item.trans}</Link> */}
          <NavLink
            activeClassName={myStyle.active}
            to={item.name === "all" ? "/" : `/${item.name}`}
            end={item.name === "all"}
          >
            {item.trans}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Categori;

/* 
<Link to=""> 단순 이동
  ㄴ to='경로'

<NavLink to="" end=""> active 클래스 값 기본 탑재
(반환값 true:false)
  ㄴ to= '경로'
  ㄴ end="경로" 경로가 정확하게 일치할 때 active 적용 가능
*/
