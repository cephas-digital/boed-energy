import React from "react";
import ServiceMenu from "../Components/cards/ServiceMenu";
import SpecializedServiceCard from "../Components/cards/SpecializedServices";
import OurClients from "../Components/our-clients/OurClients";
import Footer from "../Components/footer/Footer";

const MarineSupport = () => {
  return (
    <div>
      <div className="relative h-full ">
        <div
          className=" bg-cover bg-center overflow-y-hidden w-full text-white h-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${require("../Assets/Aboutimg.png")})`,
          }}
        >
          <div className="lg:px-8 md:px-10 px-8 text-center lg:py-[120px] md:py-[132px] py-[124px] bg-black items-center grid h-full justify-center w-full bg-opacity-50">
            <p className="text-animation lg:text-[70px] md:text-[70px] text-[40px] text-center leading-tight  font-bold font-trueno">
              Marine Support Solutions
            </p>
          </div>
        </div>
      </div>

      {/*Procurement Services  */}
      <div className="lg:px-24 md:px-10 px-8 pt-10  lg:flex md:grid grid items-center gap-10">
        <div className=" lg:w-[75%] md:w-full w-full">
          <p className=" text-[20px] font-trueno text-black py-5">
            Marine Support Solutions
          </p>
          <img
            className=" lg:h-[564px] w-full "
            src={require("../Assets/Rectangle325.png")}
            alt=""
          />
        </div>
        <div className=" lg:w-[35%] md:w-full w-full">
          <ServiceMenu />
        </div>
      </div>

      {/*  */}
      <div className="lg:px-24 md:px-10 px-8 pt-10 lg:flex md:grid grid gap-10">
        <div className=" lg:w-[75%] md:w-full w-full grid  gap-5">
          <p>
            The importance of safety is to protect you, your asset, your workers
            or team members and your process can not be overemphasized.
          </p>
          <p>
            <span className=" font-trueno">Process & Pressure Safety</span>
             : We render process and pressure safety solutions for various
            industry applications from energy to Marine, oil & gas to industrial
            sectors.
          </p>
          <p>
            We provide wide ranging Vessel Management and associated tools and
            support to our clients operating varying asset from Shallow to
            Deepwater Assets. Our Services target different phases of the Oil
            and Gas Value Chain and Consist of the following: Air Diving
            Services, Saturation Diving Services, Provision of Diving Support
            Vessels, and Provision of Technical Support
          </p>
          <p>
            <span className=" font-trueno">
              Technical & Vessel Operational Support.:
            </span>
            Provision of offshore support vessels to floating oil and gas
            production, storage, and unloading units, Towage, anchoring, and
            positioning of offshore assets., Provision of Remotely Operated
            Vehicles (ROVs) and associated tools, Ship Repairs & Dry Docking,
            Vessel Chartering and Management
          </p>
          <p>
            <span className=" font-trueno">
              {" "}
              Subsea Life of Field Services:
            </span>
            MV Melody moored to the SPM for routine maintenance. Inspection,
            Maintenance and Repair (IMR) of offshore / subsea assets, Mooring,
            Risers, umbilical, Manifolds, Flowlines, Life Extension Work on
            Aging Offshore Assets, Corrosion Management, Subsea Pipeline
            Inspection using ROVs, Subsea Pipeline Repair, Asset Integrity
            Services, Diving Support Services, Provision of Communications
            Solutions, Asset Tracking, Underwater Survey and Mapping Services,
            Dredging, Pipe Recovery, On-site machining and cutting, Production
            String Recovery, BOP intervention and Control Systems.
          </p>
          <p>
            Subsea Valves-Hydraulic Directional Control Valves (HCV), Subsea
            Control Units, Rotary Control Valves and Chemical Injection Throttle
            Valves (CTV).
          </p>
          <p>
            Riser less Well Intervention Services, Subsea Pig Launchers and
            Risers, Flow Assurance Services, Installation, Workover and Control
            Systems
          </p>
          <p>
            nterlocks for Industrial Processes: Industrial interlocks can be
            used to protect humans and ensure safe operations. Yearly a few
            accidents happen during operations and maintenance. We have multi
            turn and quarter turn locks for gate valves, globe valves and gear
            operated valves to prevent these failures and accidents.
          </p>

          <p>
            <p className=" font-trueno"> Observation & Inspection Class ROV:</p>
            The Seaeye Falcon is a powerful observation and inspection ROV,
            ideally suited for both offshore and inshore applications
          </p>
          <p>
            It features five powerful thrusters that provide precise control and
            maintain a stable platform in strong currents and turbulent waters.
            Its lightweight and compact nature makes it easy to transport with
            quick setup for rapid deployment
          </p>
          <p>
            Its addon unique 5 function manipulator skid gives excellent
            dexterity with its small arm and greatly enhances the operational
            capability of Falcon ROV. It is ideally suited to retrieval and
            salvage work as well as sample collection.
          </p>
        </div>
        <div className=" lg:w-[35%] md:w-full w-full">
          <SpecializedServiceCard />
        </div>
      </div>

      {/* Our Clients */}
      <div className="lg:px-24 md:px-10 px-8 h-full  lg:pt-10 md:pt-10 pt-10 pb-5">
        <p className=" text-center font-trueno lg:text-[40px] md:text-[40px] text-[30px]">
          Our{" "}
          <span className=" text-yellow font-trueno lg:text-[40px] md:text-[40px] text-[30px]">
            Clients
          </span>
        </p>
        <div className=" py-10">
          <OurClients />
        </div>
      </div>

      {/* Footer */}
      <div className=" bg-gray">
        <Footer />
      </div>
    </div>
  );
};

export default MarineSupport;
