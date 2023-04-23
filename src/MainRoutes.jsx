import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Layout/MainLayout/Login";
import Register from "./components/Layout/MainLayout/Register";
import HomePage from "./pages/HomePage";
import AddProduct from "./components/AddProduct/AddProduct";
import MapSection from "./components/MapSection/MapSection";

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

    {
      link: "/register",
      element: <Register />,
      id: 2,
    },

    {
      link: "/login",
      element: <Login />,
      id: 3,
    },
    {
      link: "/add",
      element: <AddProduct />,
      id: 4,
    },
    {
      link: "/map",
      element: <MapSection />,
      id: 5,
    },
  ];

  return (
    <div>
      <Routes>
        {ALL_PAGES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
