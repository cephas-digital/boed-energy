import React from "react";
import ServiceMenu from "../Components/cards/ServiceMenu";
import SpecializedServiceCard from "../Components/cards/SpecializedServices";

import Footer from "../Components/footer/Footer";
import OurClients from "../Components/our-clients/OurClients";

const ValvesAndActuation = () => {
  return (
    <div className=" overflow-x-hidden">
      <div className="relative h-full ">
        <div
          className=" bg-cover bg-center overflow-y-hidden w-full text-white h-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${require("../Assets/Aboutimg.png")})`,
          }}
        >
          <div className="lg:px-8 md:px-10 px-8 text-center lg:py-[120px] md:py-[132px] py-[124px] bg-black items-center grid h-full justify-center w-full bg-opacity-50">
            <p className="text-animation lg:text-[70px] md:text-[70px] text-[40px] text-center leading-tight  font-bold font-trueno">
              Valves and Actuation Services
            </p>
          </div>
        </div>
      </div>

      {/*Procurement Services  */}
      <div className="lg:px-24 md:px-10 px-8 pt-10  lg:flex md:grid grid items-center gap-10">
        <div className=" lg:w-[75%] md:w-full w-full">
          <p className=" text-[20px] font-trueno text-black py-5">
            Valves and Actuation Services
          </p>
          <img
            className=" lg:h-[564px] w-full "
            src={require("../Assets/Frame78.png")}
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
            We have the expertise to provide the highest quality Valve and
            Actuation Solutions with optimal performance and cost efficiency
            with seamless execution and fast delivery.
          </p>
          <p>
            We have reputable and trusted OEMs as partners, which enables us to
            offer the best and unique services without compromising on safety
            and excellent delivery. We have the capacity to deliver various flow
            control of global standard.
          </p>
          <p>
            We offer full life cycle of various types of valves and actuators
            starting from the sale to installation & commissioning, maintenance,
            repairs, testing, calibration, training and recertification with
            fast delivery, thereby ensuring that there is negligible downtime.
          </p>
          <p>Our valve solution covers the followings:</p>
          <p>
            Butterfly Valves, Gate Valves, Triple Offset Valves, Choke Valves,
            Control Valves, Check Valves, Ball Valves, Safety Valves, Relief
            Valves
          </p>
          <p>
            <span className=" font-trueno">Valve Interlock:</span>
            We operate and supports a wide selection of Global Industrial
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
            <span className=" font-trueno">
              {" "}
              Interlocks for Industrial Processes:
            </span>
            Industrial interlocks can be used to protect humans and ensure safe
            operations. Yearly a few accidents happen during operations and
            maintenance. We have multi turn and quarter turn locks for gate
            valves, globe valves and gear operated valves to prevent these
            failures and accidents.
          </p>
          <p>
            <p className=" font-trueno">Interlocks for Machine Guarding:</p>
            Machine guarding interlocks can be used to guard machines and ensure
            safe operations. Yearly a few accidents happen during operations and
            maintenance. We have bolt locks, door locks and car seals to prevent
            these failures and accidents. Machine guarding applications are well
            suited for paper and pulp, water treatment and food & beverage
            companies. These companies often use mixers or separators, and these
            could be dangerous if they are being entered during operations. Our
            technical engineers will help you find the right solution to protect
            your employees and machines
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

export default ValvesAndActuation;
