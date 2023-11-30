import React, { useMemo } from "react";
import Categori from "./Categori";
import NewsList from "./NewsList";
import { useParams } from "react-router-dom";

const NewPage = () => {
  const { category } = useParams();
  const mCategory = useMemo(() => category || "all", [category]);

  return (
    <div>
      <Categori />
      <NewsList category={mCategory} />
    </div>
  );
};

export default NewPage;
