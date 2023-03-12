import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../../../mock/products";
import {
  ProductsDiv,
  Row,
  SortingLink,
  ProductsContainer,
  OneProduct,
} from "./products.style";

function Products(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState(searchParams.get("state") ?? "all");
  const [categoryId, setCategoryId] = useState(null);
  const [data, setData] = useState(products);

  useEffect(() => {
    let state = searchParams.get("state") ?? "all";
    setState(state);
    let category = searchParams.get("category_id") ?? null;
    setCategoryId(category);
    let arr = products.filter(
      (item) =>
        (item.state === state || state === "all") &&
        (item.category_id === Number(category) || !category)
    );
    console.log(state, arr);
    setData(arr);
  }, [searchParams]);

  const stateChange = (state) => {
    setSearchParams(`state=${state}`);
  };

  return (
    <ProductsDiv>
      <Row>
        <SortingLink
          onClick={() => stateChange("all")}
          active={state === "all"}
        >
          All Plants
        </SortingLink>
        <SortingLink
          onClick={() => stateChange("new")}
          active={state === "new"}
        >
          New Arrivals
        </SortingLink>
        <SortingLink
          onClick={() => stateChange("sale")}
          active={state === "sale"}
        >
          Sale
        </SortingLink>
      </Row>
      {data ? (
        <ProductsContainer>
          {data.map((item) => (
            <OneProduct key={item.id}>
              <div>{item.id}</div>
              <div>{item.name}</div>
            </OneProduct>
          ))}
        </ProductsContainer>
      ) : null}
    </ProductsDiv>
  );
}

export default Products;
