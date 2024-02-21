import React from "react";

const NavService = () => {
  return (
    <div className=" lg:flex md:flex flex items-center gap-5">
      <button className=" rounded-md lg:w-[150px] md:w-[120px] w-[100px] text-black h-[50px] bg-white">
        Request Service
      </button>

      <button className="flex items-center rounded-md justify-between px-4 py-2 bg-white text-black lg:w-[150px] md:w-[120px] w-[100px] h-[50px]">
        English
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-2 cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 12.586l-4.293-4.293a1 1 0 0 1 1.414-1.414L10 10.172l3.293-3.293a1 1 0 0 1 1.414 1.414L10 12.586z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default NavService;
