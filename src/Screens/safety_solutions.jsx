import React from "react";
import ServiceMenu from "../Components/cards/ServiceMenu";
import SpecializedServiceCard from "../Components/cards/SpecializedServices";
import OurClients from "../Components/our-clients/OurClients";
import Footer from "../Components/footer/Footer";

const SafetySolutions = () => {
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
            <p className="typing-text lg:text-[70px] md:text-[70px] text-[40px] text-center leading-tight  font-bold font-trueno">
              <span className="text-wrapper ">Safety Solutions</span>
            </p>
          </div>
        </div>
      </div>

      {/*Procurement Services  */}
      <div className="lg:px-24 md:px-10 px-8 pt-10  lg:flex md:grid grid items-center gap-10">
        <div className=" lg:w-[75%] md:w-full w-full">
          <p className=" text-[20px] font-trueno text-black py-5">
            Safety Solutions
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
            The needed to focus on safety to protect you, your plant, and your
            process.
          </p>
          <p>
            <span className=" font-trueno">Process & Pressure Safety:</span>
            We deliver process and pressure safety solutions for diverse
            applications in the oil & gas, energy, Marine and industrial
            sectors. Our process and pressure safety products and services
            include:
          </p>
          <p>
            <span className=" font-trueno">
              Gas and flame detection (fixed and control panels):
            </span>
            Gas Detector Fixed Controllers & Alarm/Fixed Gas Detector
            Products/Fixed Flame Detectors/Area Gas Detectors/Fixed Wireless and
            Wireless alarm/Personal Safety Gas Monitor/Gas Measurement
            Devices/Legacy Products/Application Engineering. Gas & Flame
            Detection Applications for Oil & Gas, Energy Fire, FMCG, Data
            Management.
          </p>
          <p>
            <span className=" font-trueno">Valve interlocking:</span>
            We operates and supports a wide selection of Global Industrial
            Processes, keeping these working environments safe and secure. Our
            complete range of mechanical & Electro-mechanical Interlocks are
            products which are fully adaptable to supply multiple solutions to
            those requested end-user requirements.
          </p>
          <p>
            Our products have a history as a solution provider, we ensure
            process applications within the Green Energy, Oil & Gas, Chemical &
            Tank Storage segments, where they ensure a safer workplace during
            Daily Operations, Maintenance & Shutdowns.
          </p>
          <p>
            However Mechanical & Electro-mechanical interlocks are applicable to
            many other markets and applications. It is our goal to share the
            story, to operate safely, and prevent failures which can hurt
            humans, the environment we live in, and prevent valuable product
            losses.
          </p>
          <p>
            nterlocks for Industrial Processes: Industrial interlocks can be
            used to protect humans and ensure safe operations. Yearly a few
            accidents happen during operations and maintenance. We have multi
            turn and quarter turn locks for gate valves, globe valves and gear
            operated valves to prevent these failures and accidents.
          </p>
          <p>
            Interlocks for Machine Guarding: Machine guarding interlocks can be
            used to guard machines and ensure safe operations. Yearly a few
            accidents happen during operations and maintenance. We have bolt
            locks, door locks and car seals to prevent these failures and
            accidents. Machine guarding applications are well suited for paper
            and pulp, water treatment and food & beverage companies. These
            companies often use mixers or separators, and these could be
            dangerous if they are being entered during operations. Our technical
            engineers will help you find the right solution to protect your
            employees and machines.
          </p>
          <p>
            <p className=" font-trueno">Pig Traps: </p>
            Pipelines are routinely cleaned with the help of pigs that scrape
            the lines clean. This is done to remove any debris deposited thus
            preventing corrosion and undesirable increase in pressure drop.
          </p>
          <p>
            These pigs are also utilized for commissioning / decommissioning of
            pipelines as well as to detect and measure the pipeline defects such
            as corrosion, wall defects and cracks.
          </p>
          <p>
            This is achieved with the help of Pig traps which launches the pigs
            into the piping network from one side and receive it at the other
            end in a safe and controlled manner.
          </p>
          <p>
            <p className=" font-trueno"> Role of Interlocks:</p>
            The process of launching and receiving of pigs can be a hazardous
            operation if performed out of sequence. Hence a safety system is
            required that can control the process without any dependence on
            human judgement.
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

export default SafetySolutions;
