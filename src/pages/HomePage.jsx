import React from "react";
import { useNavigate } from "react-router-dom";
import HomeCategory from "../components/HomeCategory/HomeCategory";
import Card from "../components/Layout/MainLayout/Card/Card";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-8">
      <HomeCategory />
      <Card />
    </div>
  );
};

export default HomePage;
