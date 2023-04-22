import React from "react";
import { useNavigate } from "react-router-dom";
import HomeCategory from "../components/HomeCategory/HomeCategory";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HomeCategory />
    </div>
  );
};

export default HomePage;
