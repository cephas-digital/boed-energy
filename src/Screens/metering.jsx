import React from "react";
import ServiceMenu from "../Components/cards/ServiceMenu";
import SpecializedServiceCard from "../Components/cards/SpecializedServices";
import OurClients from "../Components/our-clients/OurClients";
import Footer from "../Components/footer/Footer";

const Metering = () => {
  return (
    <div className=" overflow-x-hidden">
      <div className="relative h-full ">
        <div
          className=" bg-cover bg-center overflow-y-hidden w-full text-white h-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${require("../Assets/Aboutimg.png")})`,
          }}
        >
          <div className="lg:px-20 md:px-10 px-8 text-center lg:py-[120px] md:py-[132px] py-[124px] bg-black items-center grid h-full justify-center w-full bg-opacity-50">
            <p className="text-animation lg:text-[70px] font-semibold md:text-[70px] text-[40px] text-center leading-tight font-trueno">
              Metering and Instrumentation
            </p>
          </div>
        </div>
      </div>

      {/*Procurement Services  */}
      <div className="lg:px-24 md:px-10 px-8 pt-10  lg:flex md:grid grid items-center gap-10">
        <div className=" lg:w-[75%] md:w-full w-full">
          <p className=" text-[20px] font-trueno text-black py-5">
            Metering, Instrumentation, Automation and Calibration Process
            Measurement & Flow Control
          </p>
          <img
            className=" lg:h-[564px] w-full "
            src={require("../Assets/Rectangle355.png")}
            alt=""
          />
        </div>
        <div className=" lg:w-[35%] md:w-full w-full">
          <ServiceMenu />
        </div>
      </div>

      {/*  */}
      <div className="lg:px-24 md:px-10 px-8 pt-10 lg:flex md:grid grid gap-10">
        <div className=" lg:w-[75%] md:w-full w-full grid gap-2">
          <p>
            <span className=" font-trueno">Electrical & Automation:</span>
             PLC/SCADA & ICSS Systems, Substation Startup & Commissioning, Type
            Tested Switch Gear Manufacturing, IOT/Industrial Connectivity
            Systems, Software Licensing & Support, Operations & Maintenance
            Support etc.
          </p>
          <p>
            <span className=" font-trueno">
              Process Measurement & Controls: 
            </span>
            Flow Metering Laboratory, Instrument Calibration Service, Mobile
            Safety Valve Repair, Tank Gauging & Depot Automation, Instrument
            Audit & Retrofit Support, Instrument Calibration etc.
          </p>
          <p>
            <span className=" font-trueno">Fire & Safety Systems: </span>
            Fire & Gas Detection Systems, Building Management Systems, Extra Low
            Voltage Systems, Fire Suppression Systems, Fire & Gas
            Detection, CCTV & Access Control etc.
          </p>
          <p>
            <span className=" font-trueno"> Instrumentation Service:</span>
            From wellhead to refinery and in-between, we provide highly
            specialized measurement services to our clients. With the goal of
            providing expert services, T Triangle, through its metering and
            calibration division, provides services that address the full range
            of process automation, from routine calibration of few instruments
            to a site-wide maintenance of production systems, flow measuring and
            custody transfer instrumentation.
          </p>
          <p>
            We provide calibration and metering services that supports the
            accuracy of fluid measurement on oil and gas facilities such as tank
            farms, export terminals, production platforms, FPSO, pipeline
            systems etc…
          </p>
          <p>
            We help mitigate against the possibility of huge financial losses as
            a consequent of inaccurate measurement systems. Meter proving is
            increasingly required within the process of dynamic measurement to
            ensure that the highest level of measurement accuracy is achieved.
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

export default Metering;
