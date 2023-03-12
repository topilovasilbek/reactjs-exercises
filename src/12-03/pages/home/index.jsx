import React from "react";
import Categories from "../../components/home/categories/categories.component";
import Products from "../../components/home/products/products.component";
import { HomePageDiv } from "./style";

function HomePage(props) {
  return (
    <HomePageDiv>
      <Categories />
      <Products />
    </HomePageDiv>
  );
}

export default HomePage;
