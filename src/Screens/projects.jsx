import React, { useEffect } from "react";
import Footer from "../Components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
              <span class="text-wrapper">Projects</span>
            </p>
          </div>
        </div>
      </div>

      <div className="lg:px-24 md:px-10 px-8 pt-16 pb-5">
        <div className=" justify-center items-center grid">
          <p
            data-aos="fade-up"
            data-aos-duration="3000"
            className=" font-trueno font-extralight text-center lg:w-[780px]"
          >
            Manufacturing and Supply of-customized-3-Way Ball Valve and Ball
            Valves with Hydraulic Actuator ENERGY VALVES for Shell Bonga FPSO –
            2022 TAMAP
          </p>
        </div>
        <div className=" lg:flex md:grid grid gap-10 pt-10">
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className=" lg:w-1/2 md:w-full w-full"
          >
            <img
              className=" h-full"
              src={require("../Assets/Rectangle299.png")}
              alt=""
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className=" lg:w-1/2 md:w-full w-full grid gap-10"
          >
            <img src={require("../Assets/Rectangle300.png")} alt="" />

            <img src={require("../Assets/Rectangle310.png")} alt="" />
          </div>
        </div>
      </div>

      <div className="lg:px-24 md:px-10 px-8 py-16">
        <p
          data-aos="fade-down"
          data-aos-duration="3000"
          className=" text-center font-trueno "
        >
          Insert Plate with Anchor Hooks for -Slabs Walls and Construction
          Joints for NLNG Train 7 Project
        </p>
        <div data-aos="fade-right" data-aos-duration="3000" className=" pt-10">
          <img src={require("../Assets/Rectangle311.png")} alt="" />
        </div>
      </div>
      {/* Footer */}
      <div className=" bg-gray">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
