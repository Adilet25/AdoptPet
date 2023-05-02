import { RoundedCorner } from "@mui/icons-material";
import { TextField } from "@mui/material";
import "../modalblock/modalinp.css";
import React from "react";

const styles = {
  input1: {
    height: 50,
  },
  input2: {
    height: 200,
    fontSize: "3em",
  },
};
const ModalBlocc = ({ status, props }) => {
  const REGIONS = [
    {
      name: "Бишкек",
      regionID: 1,
    },
    {
      name: "Ош",
      regionID: 2,
    },
    {
      name: "Талас",
      regionID: 3,
    },
    {
      name: "Баткен",
      regionID: 4,
    },
    {
      name: "Джалал-Абад",
      regionID: 5,
    },
    {
      name: "Чуй",
      regionID: 6,
    },
    {
      name: "Нарын",
      regionID: 7,
    },
    {
      name: "Иссык-Куль",
      regionID: 8,
    },
  ];
  const CATEGORIES = [
    {
      title: "хостелы/приюты",
      id: 1,
    },
    {
      title: "вет.клиники",
      id: 2,
    },
    {
      title: "ветеринары",
      id: 3,
    },
    {
      title: "зоо няни",
      id: 4,
    },
    {
      title: "зоо магазины",
      id: 5,
    },
  ];
  return (
    <div className="w-3/6 h-3/12 mt-28 outline rounded-3xl px-5 py-2 flex-col outline-ouryellow bg-[#ffffff] fixed flex z-10">
      <h1>Настройки поиска</h1>
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="font-medium text-lg">Цена</h1>
          <input
            type="number"
            placeholder="от"
            className="h-[2.4rem] w-32 p-2 outline outline-1 outline-zinc-400 rounded-[6px]"
          />
          <input
            type="number"
            placeholder="до"
            className="h-[2.4rem] w-32 p-2 outline outline-1 outline-zinc-400 rounded-[6px] ml-1"
          />
          <div className="flex flex-row justify-between">
            <div className="flex">
              <input type="checkbox" className="mr-2" />
              <h1>Бесплатно</h1>
            </div>
            <div className="flex">
              <input type="checkbox" className="mr-2" />
              <h1>Договорная</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-medium text-lg">Категория</h1>
          <span className="select-wrapper">
            <select className="minimal">
              <option value="" disabled selected className="hidden">
                Категория
              </option>

              {CATEGORIES.map((item) => (
                <option key={item.title} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </span>
        </div>
        <div>
          <h1 className="font-medium text-lg">Город</h1>
          <span className="select-wrapper">
            <select className="minimal">
              <option value="" disabled selected className="hidden">
                Область
              </option>

              {REGIONS.map((item) => (
                <option key={item.name} value={item.regionID}>
                  {item.name}
                </option>
              ))}
            </select>
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center p-3">
        <button
          onClick={() => status(false)}
          className="hover:text-ouryellow hover:drop-shadow-ybtn hover:font-semibold tracking-widest ease-in-out duration-300">
          Подтвердить
        </button>
      </div>
    </div>
  );
};

export default ModalBlocc;
