import React from "react";
import ServiceMenu from "../Components/cards/ServiceMenu";
import SpecializedServiceCard from "../Components/cards/SpecializedServices";
import OurClients from "../Components/our-clients/OurClients";
import Footer from "../Components/footer/Footer";

const Inspection = () => {
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
            <p className="text-animation lg:text-[60px]  md:text-[70px] text-[30px] text-center leading-tight font-trueno">
              Inspection and Maintenance Services
            </p>
          </div>
        </div>
      </div>

      {/*Procurement Services  */}
      <div className="lg:px-24 md:px-10 px-8 pt-10  lg:flex md:grid grid items-center gap-10">
        <div className=" lg:w-[75%] md:w-full w-full">
          <p className=" text-[20px] font-trueno text-black py-5">
            Inspection and Maintenance Services
          </p>
          <img
            className=" h-[564px] w-full "
            src={require("../Assets/Rectangle433.png")}
            alt=""
          />
        </div>
        <div className=" lg:w-[35%] md:w-full w-full">
          <ServiceMenu />
        </div>
      </div>

      {/*  */}
      <div className="lg:px-24 md:px-10 px-8 pt-10 lg:flex md:grid grid gap-10">
        <div className=" lg:w-[75%] md:w-full w-full grid  gap-2">
          <p>
            <span className=" font-trueno">
              Inspection & Maintenance Solutions:
            </span>
            Multi discipline Rope Access Crews, Permanent Corrosion monitoring
            solutions, Conventional NDT (UT, MP, LP, ET), Surface Prep &
            Offshore painting, Bolt torque, UWILD, SPS & dropped items surveys,
            Rotating equipment maintenance, Inspection, refurbishment, overhaul
            (GE – NP, Waukesha, Siemens, caterpillar etc.)
          </p>
          <p>
            <span className=" font-trueno">
              Instrumentation & Metering Solutions:
            </span>
            Instrument Calibration, Metering (Meter proving services), Systems
            Integration, SCADA/PLC/DCS
          </p>
          <p>
            <span className=" font-trueno">
              Gas and Flame Detectors Solutions:
            </span>
            Gas & Flame Detection’s fixed and portable gas and flame detectors
            are always application-driven and solution-oriented. Whether for a
            single application or multiple sites and areas, our durable gas
            monitoring solutions meet your unique industrial needs. We offer a
            broad range of gas detectors and controllers to satisfy most
            international certification standards such as ATEX, SIL (Safety
            Integrity Level), CSA, Marine, IECEx and others.  Find the
            controllers, transmitters, and accessories you need to effectively
            protect your people and your environment from hazardous gases.
          </p>
          <p>
            <span className=" font-trueno">
              {" "}
              Vibration Condition Monitoring:
            </span>
            Machinery diagnostics (field balancing, remote diagnostics,
            malfunctions diagnostics, failure analysis etc). Turnkey Services
            (electrical & mechanical technical design, installation, on-site
            technical assistance), Product Services (build, install and
            maintain), Rotor dynamic expertise, Thermodynamic performance
            analysis, Field commissioning services (Equipment start-up
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

export default Inspection;
