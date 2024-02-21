import React from "react";

const ServiceMenu = () => {
  return (
    <div>
      <div className="w-full h-auto bg-[#FDEACB] grid justify-center items-center py-10">
        <div className=" bg-deepyellow text-black text-[20px] font-trueno py-3 px-5">
          Service Menu
        </div>
        <ul className=" w-full pt-10 ">
          <li className=" border-b-[0.5px] border-t-[0.5px] border-t-gray border-b-gray py-3 text-center">
            Procurement
          </li>
          <li className=" border-b-[0.5px] border-b-gray py-3 text-center">
            Engineering
          </li>
          <li className=" border-b-[0.5px] border-b-gray py-3 text-center">
            Integrated Security
          </li>
          <li className=" border-b-[0.5px] border-b-gray py-3 text-center">
            Metering & Instrumentation
          </li>
          <li className=" border-b-[0.5px] border-b-gray py-3 text-center">
            Inspection & Maintenace
          </li>
          <li className=" border-b-[0.5px] border-b-gray py-3 text-center">
            Safety Solutions
          </li>
          <li className=" border-b-[0.5px] border-b-gray py-3 text-center">
            Marine Support Solutions
          </li>
          <li className=" border-b-[0.5px] border-b-gray py-3 text-center">
            Valves Actuatuation
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceMenu;
