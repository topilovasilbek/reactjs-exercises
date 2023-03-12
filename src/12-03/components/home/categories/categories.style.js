import styled from "styled-components";

export const CategoriesDiv = styled.div`
  width: calc(25% - 25px);
  padding: 14px 18px;
  background-color: #fbfbfb;
`;

export const Title = styled.h2`
  margin: 0 0 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
`;

export const Category = styled.div`
  font-style: normal;
  font-weight: ${({active}) => active ? '700' : '400'};
  font-size: 15px;
  line-height: 40px;
  cursor: pointer;
  color: ${({active}) => active ? '#46a358' : '#3d3d3d'};
  transition: 0.2s linear;

  :hover {
    color: #46a358;
  }
`;
