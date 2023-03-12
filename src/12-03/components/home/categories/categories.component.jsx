import React from "react";
import { useSearchParams } from "react-router-dom";
import categories from "../../../mock/categories";
import { CategoriesDiv, Category, Title } from "./categories.style";

function Categories(props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryChange = (id) => {
    setSearchParams(
      `category_id=${id}&state=${searchParams.get("state") ?? "all"}`
    );
  };

  return (
    <CategoriesDiv>
      <Title>Categories</Title>
      {categories.map(({ title, id }) => (
        <Category
          onClick={() => categoryChange(id)}
          active={Number(searchParams.get("category_id")) === id}
          key={id}
        >
          {title}
        </Category>
      ))}
    </CategoriesDiv>
  );
}

export default Categories;
