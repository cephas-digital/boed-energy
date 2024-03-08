import React from "react";
import { Link } from "react-router-dom";

const SpecializedServiceCard = () => {
  return (
    <div>
      <div className="w-full h-auto bg-[#FDEACB] grid justify-center items-center py-10">
        <div className=" bg-deepyellow text-black text-[20px] font-trueno py-3 px-5">
          Specialized Services
        </div>
        <ul className=" w-full grid pt-10 ">
          <Link
            to="/pipe_lifting_system"
            className=" border-b-[0.5px] border-t-[0.5px] border-t-gray border-b-gray py-3 text-center"
          >
            Pipe Lifting System
          </Link>
          <Link
            to="/safe_isolation_of_passing_valves"
            className=" border-b-[0.5px] border-b-gray py-3 text-center"
          >
            Safe Isolation of Passing Valves
          </Link>
          <Link
            to="/leak_detection_solution"
            className=" border-b-[0.5px] border-b-gray py-3 text-center"
          >
            Leak Detecting Solutions
          </Link>
          <Link
            to="/fire_suppression"
            className=" border-b-[0.5px] border-b-gray py-3 text-center"
          >
            Fire Suppression
          </Link>
          <Link
            to="/oil_spill_and_waste_water_solutions"
            className=" border-b-[0.5px] border-b-gray py-3 text-center"
          >
            Oil Spill and Wastewater Solutions
          </Link>
          <Link
            to="/turbines_and_rotating_equipment_solutions"
            className=" border-b-[0.5px] border-b-gray py-3 text-center"
          >
            Turbine Rotation
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SpecializedServiceCard;
