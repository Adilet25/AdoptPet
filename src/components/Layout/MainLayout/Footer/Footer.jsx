import React from "react";
import Logo from "../../../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import inst from "../../../../assets/fotassets/ri_instagram-fill.svg";
import tiktok from "../../../../assets/fotassets/ic_twotone-tiktok.svg";
import twit from "../../../../assets/fotassets/mdi_twitter.svg";

const Footer = () => {
  const navigate = useNavigate("");
  return (
    <div className="flex flex-row items-center justify-between container mx-auto p-12 bg-black text-white w-[100%] h-[17vh] m-0">
      <div className="flex flex-row">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex flex-row items-center">
          <div className="w-[0.5px] h-[70px] bg-white"></div>
          <div className="ml-8">
            <h1>ZooNet.kg</h1>
            <h1>2023 Все права защищены</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="mr-12">
          <h2 onClick={() => navigate("")} className="cursor-pointer">
            Полезные статьи
          </h2>
          <h2 onClick={() => navigate("")} className="cursor-pointer">
            Отзывы
          </h2>
          <h2 onClick={() => navigate("")} className="cursor-pointer">
            О сайте
          </h2>
        </div>
        <div>
          <h2>Наши соцсети:</h2>
          <div className="flex flex-row justify-between">
            <a target="blank" href="https://www.instagram.com/">
              <img src={inst} alt="" />
            </a>
            <a target="blank" href="https://www.tiktok.com/">
              <img src={tiktok} alt="" />
            </a>
            <a target="blank" href="https://twitter.com/">
              <img src={twit} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
