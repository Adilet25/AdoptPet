import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const MainRoutes = () => {
  //! Сюда добавлять ссылки на страницы
  const ALL_PAGES = [
    {
      //? адрес ссылки
      link: "/",

      //? компонент страницы
      element: <HomePage />,

      //? идент. номер для страниц
      id: 1,
    },
  ];

  return (
    <div>
      <Routes>
        {ALL_PAGES.map((item) => {
          <Route path={item.link} element={item.element} key={item.id} />;
        })}
      </Routes>
    </div>
  );
};

export default MainRoutes;
