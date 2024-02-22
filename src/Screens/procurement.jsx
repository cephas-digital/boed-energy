import React from "react";
import ServiceMenu from "../Components/cards/ServiceMenu";
import SpecializedServiceCard from "../Components/cards/SpecializedServices";
import OurClients from "../Components/our-clients/OurClients";
import Footer from "../Components/footer/Footer";

const Procurement = () => {
  return (
    <div className=" overflow-x-hidden">
      <div className="relative h-full ">
        <div
          className=" bg-cover bg-center overflow-y-hidden w-full text-white h-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${require("../Assets/Aboutimg.png")})`,
          }}
        >
          <div className="lg:px-24 md:px-10 px-8 text-center lg:py-[120px] md:py-[132px] py-[124px] bg-black items-center grid h-full justify-center w-full bg-opacity-50">
            <p className="typing-text lg:text-[70px] md:text-[70px] text-[40px] text-center leading-tight lg:w-[843px] font-bold font-trueno">
              <span class="text-wrapper">Procurement</span>
            </p>
          </div>
        </div>
      </div>

      {/*Procurement Services  */}
      <div className="lg:px-24 md:px-10 px-8 pt-10  lg:flex md:grid grid items-center gap-10">
        <div className=" lg:w-[75%] md:w-full w-full">
          <p className=" text-[40px] font-trueno text-yellow py-5">
            Procurement Services
          </p>
          <img
            className=" lg:h-[564px] w-full "
            src={require("../Assets/Rectangle312.png")}
            alt=""
          />
        </div>
        <div className=" lg:w-[35%] md:w-full w-full">
          <ServiceMenu />
        </div>
      </div>

      {/*  */}
      <div className="lg:px-24 md:px-10 px-8 pt-10 lg:flex md:grid grid gap-10">
        <div className=" lg:w-[75%] md:w-full w-full grid gap-5">
          <p>
            We take pride in our long-standing partnerships with various
            Original Equipment Manufacturers (OEMs) across the globe. We have
            strategic alliances with stockiest, buying houses and manufactures
            around the world which further help us deliver quality services in
            the field of the supply chain. Through our experience, resources,
            and expertise in procurement, we offer cost effective services and a
            seamless experience for our customer.
          </p>
          <p>
            We source and create an exceptional service, through our supply
            networks that allow us to oﬀer a sustainable and eﬃciently delivered
            procurement solutions. We work with our established multinational
            and international suppliers, oﬀering commercial viability and
            consultancy on full material supply circle.
          </p>
          <p>
            Our Supply Chain Management team works smoothly with our various
            partners to ensure the impeccable delivery of our wide range of
            products and services. Our objective is to give the best services
            across the various industry segments like Cement, Oil and Gas, Food
            and Beverages, Power Industry, Energy, and we have a track record of
            handling various complex projects that deliver value to our
            customers.
          </p>

          <p>
            <span className=" font-trueno">Electrical:</span>
             Power Distribution, Lighting, Circuit Breakers, Test Equipment,
            Power Supplies, Transformers, Enclosures, Motor Controls, Cable
            Trays, Electrical Accessories & Electrical Cables.
          </p>
          <p>
            <span className=" font-trueno">Instrumentation: </span>
            Level, Pressure, Liquid Flowmeters, Gas Flowmeters, Density, Meter
            Provers, Regulators, Sensors, Temperature, Instrument
            Accessories, Instrumentation Cables, Control
            Instrument, Controls, Terminal
            Blocks, HMI/SCADA, Controllers, Signal Devices, Variable Speed
            Drives, Relays, Safety Barriers, Fuses, Industrial Networks, Control
            Accessories
          </p>
          <p>
            <span className=" font-trueno">Fire & Gas:</span>
             Fire Alarm Devices, Gas Detectors, Gas Analyzers, Gas
            Chromatographs, Calibration Gas, Fire Suppression, Flame
            Detectors, Aspirators, Clean Agents, Safety Accessories etc.
          </p>
          <p>
            Pneumatics and
            Hydraulics: Valves, Actuators, Pumps, Motors, Vibrator
            Equipment, Pneumatic, Hydraulic, Compressor Controls, Mechanical
            Accessories Heat Exchangers, Rotating equipment Spare, etc.
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

export default Procurement;
