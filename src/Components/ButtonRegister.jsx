import React from "react";

const ButtonRegister = ({ label, fnRegistarse }) => {
  return (
    <div>
      <button
        onClick={fnRegistarse}
        className="text-white border-none font-bold tracking-[0.125rem] w-[8.625rem] h-[2.5rem] rounded-[1.25rem] transition-transform duration-200 ease-in bg-[#766ce7] hover:shadow-lg hover:shadow-violet-new hover:scale-110 hover:brightness-[1.1] hover:text-white"
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonRegister;
