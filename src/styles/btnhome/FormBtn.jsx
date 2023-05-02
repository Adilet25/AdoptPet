import React from "react";

const FormBtn = ({ img, text, w }) => {
  return (
    <button className="bg-white hover:bg-ouryellow transition duration-150 font-semibold text-sm items-center uppercase flex flex-row  justify-evenly w-44 h-11 rounded-3xl drop-shadow-3xl drop-shadow-btnsh m-11">
      <h1 className="self-center">{text}</h1>
      <img src={img} alt="" style={{ width: `3.5rem` }} />
    </button>
  );
};

export default FormBtn;
