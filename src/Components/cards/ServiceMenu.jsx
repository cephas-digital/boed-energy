import React from "react";
import { Link } from "react-router-dom";

const ServiceMenu = () => {
  return (
    <div>
      <div className="w-full h-auto bg-[#FDEACB] grid justify-center items-center py-10">
        <div className=" bg-deepyellow text-black text-[20px] font-trueno py-3 px-5">
          Service Menu
        </div>
        <ul className=" w-full grid  pt-10 ">
          <Link
            to="/procurement"
            className=" border-b-[0.5px] hover:bg-yellow hover:text-white  border-t-[0.5px] border-t-gray border-b-gray py-3 text-center"
          >
            Procurement
          </Link>
          <Link
            to="/engineering"
            className=" border-b-[0.5px]  hover:bg-yellow hover:text-white  border-b-gray py-3 text-center"
          >
            Engineering
          </Link>
          <Link
            to="/integrated_security_and_fire_solutions"
            className=" border-b-[0.5px]  hover:bg-yellow hover:text-white  border-b-gray py-3 text-center"
          >
            Integrated Security
          </Link>
          <Link
            to="/metering_and_instrumentation"
            className=" border-b-[0.5px]  hover:bg-yellow hover:text-white  border-b-gray py-3 text-center"
          >
            Metering & Instrumentation
          </Link>
          <Link
            to="/inspection"
            className=" border-b-[0.5px]  hover:bg-yellow hover:text-white  border-b-gray py-3 text-center"
          >
            Inspection & Maintenace
          </Link>
          <Link
            to="/safety_solutions"
            className=" border-b-[0.5px]  hover:bg-yellow hover:text-white  border-b-gray py-3 text-center"
          >
            Safety Solutions
          </Link>
          <Link
            to="/marine_support_solutions"
            className=" border-b-[0.5px]  hover:bg-yellow hover:text-white  border-b-gray py-3 text-center"
          >
            Marine Support Solutions
          </Link>
          <Link
            to="/valves_and_actuation_services"
            className=" border-b-[0.5px]  hover:bg-yellow hover:text-white  border-b-gray py-3 text-center"
          >
            Valves Actuatuation
          </Link>
          <Link
            to="/it_services"
            className=" border-b-[0.5px]  hover:bg-yellow hover:text-white  border-b-gray py-3 text-center"
          >
            IT Services
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ServiceMenu;
