import styled from "styled-components";

export const ProductsDiv = styled.div`
  width: calc(75% - 25px);
`;

export const Row = styled.div`
  display: flex;
  gap: 30px;
`;

export const SortingLink = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  cursor: pointer;
  color: #3d3d3d;
  border-bottom: 2px solid #46a358;
  padding: 7px 0;
  transition: 0.2s linear;

  :hover {
    color: #46a358;
  }

  border-bottom: 2px solid
    ${({ active }) => (active ? "#46A358" : "transparent")};
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const OneProduct = styled.div`
  width: calc(100% / 3 - 40px / 3);
  margin-top: 20px;
  padding: 20px;
  background-color: #fbfbfb;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
