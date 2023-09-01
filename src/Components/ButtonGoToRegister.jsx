import React from "react";

const ButtonGoToRegister = ({ fnIrARegistro, label }) => {
  return (
    <>
      <button
        onClick={fnIrARegistro}
        className="text-white border-none font-bold tracking-[0.125rem] w-[8.625rem] h-[2.5rem] rounded-[1.25rem] transition-transform duration-200 ease-in bg-green-500 hover:scale-110 hover:brightness-[1.1] hover:shadow-lg hover:shadow-green-400/90 hover:text-white"
      >
        {label}
      </button>
    </>
  );
};

export default ButtonGoToRegister;
