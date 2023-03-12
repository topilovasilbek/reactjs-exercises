import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import { AppDiv } from "./style";
import navbar from "./utils/navbar.data";
import NotFoundPage from "./pages/404/index";

const GreenShop = () => {
  return (
    <AppDiv>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map((item) =>
            !item.isPrivate ? (
              <Route
                path={item.path}
                element={item.element}
                key={item.id}
              ></Route>
            ) : null
          )}
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </AppDiv>
  );
};

export default GreenShop;
