import React from "react";
import NavService from "./NavService";

const Nav = () => {
  return (
    <div className=" lg:px-16 md:px-10 px-8 flex items-center relative  lg:gap-0 md:gap-3 gap-5 justify-between bg-[#666666]">
      <div className=" lg:flex md:flex grid items-center lg:gap-10">
        <div className=" flex items-center gap-2">
          <img
            className=" w-[25px] h-[25px]"
            src={require("../../Assets/PhoneCal.png")}
            alt=""
          />
          <p className=" text-white">+2349031762727 | +2349087300448</p>
        </div>
        <div className=" flex items-center gap-2 lg:pr-0 md:pr-10 pr-5">
          <img
            className=" w-[32px] h-[32px]"
            src={require("../../Assets/Envelope.png")}
            alt=""
          />
          {/* <p className=" text-white underline">kevinadinusor@gmail.com</p> */}
          <a
            className=" text-white underline"
            href="mailto:info@boedenergy.com"
          >
            info@boedenergy.com
          </a>
        </div>
      </div>

      {/* Buttons */}
      <div className=" lg:block md:block hidden py-5 items-center gap-5">
        <NavService />
      </div>
    </div>
  );
};

export default Nav;
