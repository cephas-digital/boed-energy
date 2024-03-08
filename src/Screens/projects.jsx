import React, { useEffect } from "react";
import Footer from "../Components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Rectangle571 from "../Assets/Rectangle571.png";
import Rectangle572 from "../Assets/Rectangle572.png";

const Projects = () => {
  const project = [
    {
      id: 1,
      img: Rectangle571,
      text: "Procurement of various spare parts for FHC",
    },
    {
      id: 2,
      img: Rectangle572,
      text: "Construction of treatment plant at NGML metering station, Eleme, Rivers state",
    },
    {
      id: 3,
      img: Rectangle571,
      text: 'Procurement of line pipes 8" sch 40 PE coated for FHC',
    },
  ];
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

      <div className="lg:px-24 md:px-10 px-8 pt-16 pb-5 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-x-5 lg:gap-y-10  gap-10">
        {project.map((i) => (
          <div key={i.id} className=" grid lg:w-[520px]">
            <img src={i.img} alt="" />
            <div className=" h-[140px] bg-[#666666] w-full text-white justify-center items-center grid text-[24px] px-5 ">
              <p>{i.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <div className=" bg-gray">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
