import React from "react";
import ServiceMenu from "../Components/cards/ServiceMenu";
import SpecializedServiceCard from "../Components/cards/SpecializedServices";
import OurClients from "../Components/our-clients/OurClients";
import Footer from "../Components/footer/Footer";

const Engineering = () => {
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
              <span class="text-wrapper">Engineering</span>
            </p>
          </div>
        </div>
      </div>

      {/*Procurement Services  */}
      <div className="lg:px-24 md:px-10 px-8 pt-10  lg:flex md:grid grid items-center gap-10">
        <div className=" lg:w-[75%] md:w-full w-full">
          <p className=" lg:text-[40px] md:text-[40px] text-[30px] font-trueno text-yellow py-5">
            Procurement Services
          </p>
          <img
            className=" lg:h-[564px] w-full "
            src={require("../Assets/Rectangle366.png")}
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
            We are also involved in engineering solutions and construction and
            corporate maintenance of rotating, static, pipeline and ﬂowline
            equipment with the assistance of highly skilful team of engineers
            and technicians with up-to-date industrial experiences in carrying
            out installations, maintenance, and re-engineering of various
            industrial equipment.
          </p>
          <p>
            Steel Construction Services, Electrical & Instrumentation Services,
            Civil Construction Services, Fabrication, Steel Fencing and Security
            Structures.
          </p>
          <p>
            <p className=" text-[20px] py-2 font-trueno">
              Electrical Engineering
            </p>
            Electrical and control panel design and building, Industrial
            electrical wiring and cable laying, Earthing and lightning
            protection, Power audit, Electric motor rewinding, LV, MV and HV
            electrical power services, UPS and inverter solutions, Electrical
            engineering manpower supply services and Drives and gearboxes
            repairs.
          </p>
          <p>
            <p className=" text-[20px] py-2 font-trueno">
              Mechanical Engineering and Maintenance
            </p>
            Installation, commissioning, and verification of process instruments
            such as flowmeters, pressure transmitters, level meters, pumps, and
            valves. Installation and commissioning of motors, drives and
            gearboxes.
          </p>
          <p>
            Piping design, piping, lagging and line modification, Fabrication,
            Installation of hydraulic and pneumatic systems, Pump and valve
            repair, Condition monitoring: gas analysis, Chromatography,
            Thermography, vibration, sound etc. Mechanical manpower supply
            services
          </p>
          <p>
            <p className=" text-[20px] py-2 font-trueno">Construction</p>
            We engage highly trained construction engineers and professionals
            with a wealth of knowledge and innovation. Finding a company that
            mitigates risk by taking proactive measures in rewarding safety
            performance with routine execution of NO-recordable or lost time
            incident and minimizes environmental and social impact.
          </p>
          <p>
            Using a robust pre-construction planning process is critical in the
            choice of engineering services required by our clients. The core
            reason why we are in business.
          </p>
          <p>
            <p className=" text-[20px] py-2 font-trueno"> Fabrication</p>
            We engage in both large, medium, and small-scale industrial
            fabrication as well as heavy industrial repairs, overhaul, and
            breakdown services for a wide range of customers. We also do
            modification of existing system and fabricating of integral
            components.
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

export default Engineering;
