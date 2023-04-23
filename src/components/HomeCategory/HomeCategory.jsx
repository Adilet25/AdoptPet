import React from "react";
import anmlogo from "../../assets/homeassets/Vector (4).svg";
import FormBtn from "../../styles/btnhome/FormBtn";
import dogbtn from "../../assets/homeassets/dogpng.parspng 1.svg";
import catbtn from "../../assets/homeassets/breakthrough-768x512 1.svg";
import cowbtn from "../../assets/homeassets/98b4f35834df046226c6d311c20fde09 1.svg";
import brdbtn from "../../assets/homeassets/9ddda7066388a961b79c65aa00955ca9 1.svg";
import fshbtn from "../../assets/homeassets/1618554630_32-krasivosti_pro-p-ribki-s-dlinnimi-khvostami-ribi-krasivo-fo-32 1.svg";
import grzbtn from "../../assets/homeassets/roborovsky_hamster 1.svg";
import rptbtn from "../../assets/homeassets/Mask group-1.svg";
import spdbtn from "../../assets/homeassets/Spider-PNG-Photos 1.svg";
import beebtn from "../../assets/homeassets/Bee-PNG-3 1.svg";
import gpslogo from "../../assets/homeassets/material-symbols_home-pin.svg";
import zoobtn from "../../assets/Untitled (Copy) (1)/3048235 1.svg";
import hospbtn from "../../assets/Untitled (Copy) (1)/istockphoto-688337988-612x612 1.svg";
import docbtn from "../../assets/Untitled (Copy) (1)/11179 2.svg";
import nanbtn from "../../assets/Untitled (Copy) (1)/1904.i305.026 3.svg";
import htlbtn from "../../assets/Untitled (Copy) (1)/Mask group.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../HomeCategory/mapbtn.css";
import { Navigate, useNavigate } from "react-router-dom";

const HomeCategory = () => {
  const navigate = useNavigate("");
  return (
    <div className="container mx-auto px-8 py-2">
      <div className="flex flex-row items-center">
        <button className="bg-d1 text-white flex flex-row items-center justify-between w-52 h-11 rounded-3xl px-12 drop-shadow-jbtn ">
          <img src={anmlogo} alt="" />
          Животные
        </button>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            1280: {
              width: 1280,
              slidesPerView: 5.3,
            },
            // when window width is >= 768px
            0: {
              width: 0,
              slidesPerView: 5,
            },
          }}
          spaceBetween={100}
          className="w-[80vw]">
          <SwiperSlide>
            <button className="bg-white hover:bg-ouryellow transition duration-150 font-semibold text-sm  uppercase flex flex-row  justify-evenly w-52 h-11 rounded-3xl drop-shadow-btnsh  hover:drop-shadow-ybtn m-7">
              <h1 className="self-center">Собаки</h1>
              <img src={dogbtn} alt="" style={{ width: `3.15rem` }} />
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="bg-white hover:bg-ouryellow transition duration-150 font-semibold text-sm items-center uppercase flex flex-row  justify-evenly w-52 h-11 rounded-3xl drop-shadow-btnsh  hover:drop-shadow-ybtn m-7">
              <h1 className="self-center">Кошки</h1>
              <img src={catbtn} alt="" style={{ width: `4rem` }} />
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="bg-white hover:bg-ouryellow transition duration-150 font-semibold text-sm  uppercase flex flex-row  justify-evenly w-52 h-11 rounded-3xl drop-shadow-btnsh  hover:drop-shadow-ybtn m-7">
              <h1 className="self-center">СЕЛЬХОЗ. ЖИВОТНЫЕ</h1>
              <img
                src={cowbtn}
                alt=""
                className="scale-x-[-1] w-24 self-end rounded-l-3xl "
              />
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="bg-white hover:bg-ouryellow transition duration-150 font-semibold text-sm items-center uppercase flex flex-row  justify-evenly w-52 h-11 rounded-3xl drop-shadow-btnsh  hover:drop-shadow-ybtn m-7">
              <h1 className="self-center">птицы</h1>
              <img
                src={brdbtn}
                alt=""
                style={{ width: `3.2rem` }}
                className="self-end"
              />
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="bg-white hover:bg-ouryellow transition duration-150 font-semibold text-sm items-center uppercase flex flex-row  justify-evenly w-52 h-11 rounded-3xl drop-shadow-btnsh  hover:drop-shadow-ybtn m-7">
              <h1 className="self-center">Рыбы</h1>
              <img src={fshbtn} alt="" style={{ width: `6rem` }} />
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="bg-white hover:bg-ouryellow transition duration-150 font-semibold text-sm items-center uppercase flex flex-row  justify-evenly w-52 h-11 rounded-3xl drop-shadow-btnsh  hover:drop-shadow-ybtn m-7">
              <h1 className="self-center">грызуны</h1>
              <img src={grzbtn} alt="" style={{ width: `4rem` }} />
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="bg-white hover:bg-ouryellow transition duration-150 font-semibold text-sm items-center uppercase flex flex-row  justify-evenly w-56 h-11 rounded-3xl drop-shadow-btnsh  hover:drop-shadow-ybtn m-7">
              <h1 className="self-center">рептилии</h1>
              <img
                src={rptbtn}
                alt=""
                style={{ width: `7rem` }}
                className="self-end"
              />
            </button>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <button className="bg-white hover:bg-ouryellow transition duration-150 font-semibold text-sm uppercase flex flex-row w-52 h-11 rounded-3xl drop-shadow-btnsh  hover:drop-shadow-ybtn m-7">
              <h1 className="self-center ml-5">ПАУКООБРАЗНЫЕ</h1>
              <img
                src={spdbtn}
                alt=""
                style={{ width: `7rem` }}
                className="rounded-r-3xl"
              />
            </button>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <button className="bg-white hover:bg-ouryellow transition duration-150 font-semibold text-sm items-center uppercase flex flex-row  justify-evenly w-52 h-11 rounded-3xl drop-shadow-btnsh  hover:drop-shadow-ybtn m-7">
              <h1 className="self-center">НАСЕКОМЫЕ</h1>
              <img
                src={beebtn}
                alt=""
                style={{ width: `5rem` }}
                className="rounded-r-3xl"
              />
            </button>
          </SwiperSlide>{" "}
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>{" "}
      <div className="flex flex-row items-center">
        <button
          //   className="text-white flex flex-row items-center justify-between w-52 h-11 rounded-3xl px-12 drop-shadow-btnsh  hover:drop-shadow-ybtn"
          onClick={() => navigate("/map")}
          className="mapbtnstyle font-bold flex flex-row items-center justify-between w-52 h-11 rounded-3xl px-12 drop-shadow-btnsh ">
          <img src={gpslogo} alt="" className="w-8" />
          КАТАЛОГ
        </button>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            1280: {
              width: 1280,
              slidesPerView: 5.3,
            },
            // when window width is >= 768px
            0: {
              width: 0,
              slidesPerView: 5,
            },
          }}
          spaceBetween={100}
          className="w-[80vw]">
          <SwiperSlide>
            <button className="bg-white hover:bg-ouryellow transition duration-150 m-5 font-semibold text-sm  uppercase flex flex-row  justify-evenly w-52 h-11 rounded-3xl drop-shadow-btnsh  hover:drop-shadow-ybtn mx-3">
              <h1 className="self-center">ЗООМАГАЗИНЫ</h1>
              <img src={zoobtn} alt="" style={{ width: `3.15rem` }} />
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="bg-white hover:bg-ouryellow transition duration-150 m-5 font-semibold text-sm items-center uppercase flex flex-row  justify-evenly w-52 h-11 rounded-3xl drop-shadow-btnsh  hover:drop-shadow-ybtn mx-3">
              <h1 className="self-center">ВЕТКЛИНИКИ</h1>
              <img src={hospbtn} alt="" style={{ width: `4rem` }} />
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="bg-white hover:bg-ouryellow transition duration-150 m-5 font-semibold text-sm  uppercase flex flex-row  justify-evenly w-52 h-11 rounded-3xl drop-shadow-btnsh  hover:drop-shadow-ybtn mx-3">
              <h1 className="self-center">ВЕТЕРИНАРЫ</h1>
              <img
                src={docbtn}
                alt=""
                className="scale-x-[-1] w-24 self-end rounded-l-3xl "
              />
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="bg-white hover:bg-ouryellow transition duration-150 m-5 font-semibold text-sm items-center uppercase flex flex-row  justify-evenly w-52 h-11 rounded-3xl drop-shadow-btnsh  hover:drop-shadow-ybtn mx-3">
              <h1 className="self-center">ЗООНЯНИ</h1>
              <img
                src={nanbtn}
                alt=""
                style={{ width: `3.2rem` }}
                className="self-end"
              />
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="bg-white hover:bg-ouryellow transition duration-150 m-5 font-semibold text-sm items-center uppercase flex flex-row  justify-evenly w-52 h-11 rounded-3xl drop-shadow-btnsh  hover:drop-shadow-ybtn mx-3">
              <h1 className="self-center">ХОСТЕЛЫ</h1>
              <img src={htlbtn} alt="" style={{ width: `6rem` }} />
            </button>
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
      <div></div>
    </div>
  );
};

export default HomeCategory;
