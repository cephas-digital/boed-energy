import React from "react";

const SpecializedServiceCard = () => {
  return (
    <div>
      <div className="w-full h-auto bg-[#FDEACB] grid justify-center items-center py-10">
        <div className=" bg-deepyellow text-black text-[20px] font-trueno py-3 px-5">
          Specialized Services
        </div>
        <ul className=" w-full pt-10 ">
          <li className=" border-b-[0.5px] border-t-[0.5px] border-t-gray border-b-gray py-3 text-center">
            Pipe Lifting System
          </li>
          <li className=" border-b-[0.5px] border-b-gray py-3 text-center">
            Safe Isolation of Passing Valves
          </li>
          <li className=" border-b-[0.5px] border-b-gray py-3 text-center">
            Leak Detecting Solutions
          </li>
          <li className=" border-b-[0.5px] border-b-gray py-3 text-center">
            Fire Suppression
          </li>
          <li className=" border-b-[0.5px] border-b-gray py-3 text-center">
            Oil Spill and Wastewater Solutions
          </li>
          <li className=" border-b-[0.5px] border-b-gray py-3 text-center">
            Turbine Rotation
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

export default SpecializedServiceCard;
