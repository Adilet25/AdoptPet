import React, { useEffect } from "react";
import Card from "../Layout/MainLayout/Card/Card";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import testimg from "../../assets/62b4b33cc9344e15555b8a7ce831a090 (1).jpg";

const MainSection = () => {
  const { products, getProducts } = useProducts();
  const navigate = useNavigate("");

  useEffect(() => {
    getProducts();
  }, []);
  const PRODUCTS = [
    {
      title: "Собака",
      img: { testimg },
      desc: "Срочно продаю собаку свою, похожую на Хатико. Привезли из Америки",
      cost: 200,
      id: 1,
    },
    {
      title: "Кошка",
      img: { testimg },
      desc: "Срочно продаю собаку свою, похожую на Хатико. Привезли из Америки",
      cost: 100,
      id: 2,
    },
    {
      title: "Попугай",
      img: { testimg },
      desc: "Срочно продаю собаку свою, похожую на Хатико. Привезли из Америки",
      cost: "Даром",
      id: 3,
    },
    {
      title: "Мышь",
      img: { testimg },
      desc: "Срочно продаю собаку свою, похожую на Хатико. Привезли из Америки",
      cost: 600,
      id: 4,
    },
    {
      title: "Лошадь",
      img: { testimg },
      desc: "Срочно продаю собаку свою, похожую на Хатико. Привезли из Америки",
      cost: 70000,
      id: 5,
    },
    {
      title: "Собака",
      img: { testimg },
      desc: "Срочно продаю собаку свою, похожую на Хатико. Привезли из Америки",
      cost: 199,
      id: 6,
    },
    {
      title: "Попугай",
      img: { testimg },
      desc: "Срочно продаю собаку свою, похожую на Хатико. Привезли из Америки",
      cost: 780,
      id: 7,
    },
    {
      title: "Кот",
      img: { testimg },
      desc: "Срочно продаю собаку свою, похожую на Хатико. Привезли из Америки",
      cost: 650,
      id: 8,
    },
    {
      title: "Карова",
      img: { testimg },
      desc: "Срочно продаю собаку свою, похожую на Хатико. Привезли из Америки",
      cost: 25000,
      id: 9,
    },
  ];

  return (
    <div className="container mx-auto bg-[#fff] drop-shadow-block rounded-[3rem]">
      <div className="py-8 px-2">
        <button onClick={() => navigate("add")}>New Product</button>
        <div className="flex flex-row flex-wrap justify-between">
          {/* {products ? ( */}
          {PRODUCTS.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              cost={item.cost}
              desc={item.desc}
            />
          ))}
          {/* ) : ( */}
          {/* <h3>Loading...</h3>
          )} */}
        </div>
        {/* <Card /> */}
      </div>
    </div>
  );
};

export default MainSection;
