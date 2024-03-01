import React from "react";
import ServiceMenu from "../Components/cards/ServiceMenu";
import SpecializedServiceCard from "../Components/cards/SpecializedServices";

import Footer from "../Components/footer/Footer";

const TurbinesandRotating = () => {
  return (
    <div className=" overflow-x-hidden">
      <div className="relative h-full ">
        <div
          className=" bg-cover bg-center overflow-y-hidden w-full text-white h-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${require("../Assets/Aboutimg.png")})`,
          }}
        >
          <div className="lg:px-8 md:px-10 px-8 text-center lg:py-[80px] md:py-[132px] py-[124px] bg-black items-center grid h-full justify-center w-full bg-opacity-50">
            <p className="text-animation lg:text-[70px] font-semibold md:text-[70px] text-[40px] text-center leading-tight font-trueno">
              Turbines and Rotating  Equipment Solutions
            </p>
          </div>
        </div>
      </div>

      {/*Procurement Services  */}
      <div className="lg:px-24 md:px-10 px-8 pt-10  lg:flex md:grid grid items-center gap-10">
        <div className=" lg:w-[75%] md:w-full w-full">
          <p className=" text-[20px] font-trueno text-black py-5">
            Turbines and Rotating Equipment Solutions
          </p>
          <img
            className=" lg:h-[564px] w-full "
            src={require("../Assets/Rectangle352.png")}
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
            A proven global solution for on-stream pipe inspection and
            remediation programs.
          </p>
          <p>
            Ovolifts has a unique and patented technology developed in
            conjunction with the Petro-chemical industry for providing safe
            access to multiple pipe touchpoints in live environments.
          </p>
          <p>Assuring Asset Integrity</p>
          <p>
            Our pipe lifting systems enable inspection and corrosion prevention
            maintenance on multiple pipe touchpoints whilst the lines are
            on-stream and averts costly plant shutdowns or extended turnarounds.
          </p>
          <p>
            Our pipe lifting tools are a key component of our lifting solution.
          </p>
          <p>
            We have product and service portfolios that serve the entire fire
            and security market, integrating all verticals. We have a reputable
            reference base from the private sector to the industrial sector.
          </p>
          <p>
            Quality, reliability, and efficiency are key driving forces in terms
            of the products and technology we import and distribute which forms
            part of our core business.
          </p>
          <p>
            Our core business is project-based distribution, which focuses on
            Our pipe lifting tools are a key component of our lifting solution.
          </p>
          <p>
            We work with your plant maintenance contractor to engineer a safe
            lifting solution, providing clearance between the pipe and the
            entire top section of the pipe support whilst the lines are
            in-service.
          </p>
          <p>
            This gives free access at the pipe touchpoints to conduct
            maintenance in a single step. Our systems achieve lifting heights of
            up to 6” (project specific for greater heights), ideal to perform
            NDT, maintenance, or improvements.
          </p>
          <p>
            Lifting is done remotely using hydraulic rams to avoid personnel
            exposure and risks. The lift is then vertically secured, declared a
            static structure (rather than a suspended load) and therefore safe
            to conduct work underneath.
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
        {/* <div className=" py-10">
          <OurClients />
        </div> */}
      </div>

      {/* Footer */}
      <div className=" bg-gray">
        <Footer />
      </div>
    </div>
  );
};

export default TurbinesandRotating;
