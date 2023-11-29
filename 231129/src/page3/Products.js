import { useParams } from "react-router-dom";

const Products = ({ data }) => {
  // const { 사용자정의 라우트 변수 } = useParams();
  const { name } = useParams();

  return (
    <div>
      <h2>Products</h2>
      <h3>{name} 값 받기</h3>
      <hr />
      {data
        .filter((item) => item.title === name)
        .map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.info}</p>
          </div>
        ))}
    </div>
  );
};

export default Products;
