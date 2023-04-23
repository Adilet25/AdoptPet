import React, { useEffect } from "react";
import Card from "../Layout/MainLayout/Card/Card";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const MainSection = () => {
  const { products, getProducts } = useProducts();
  const navigate = useNavigate("");

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container mx-auto bg-[#fff] drop-shadow-block rounded-[3rem]">
      <div className="py-8 px-2">
        <button onClick={() => navigate("add")}>New Product</button>
        <div>
          {products ? (
            products.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
        <Card />
      </div>
    </div>
  );
};

export default MainSection;
