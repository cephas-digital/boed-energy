import React from "react";
import card5 from "../Assets/card5.png";
import card6 from "../Assets/card6.png";
import card7 from "../Assets/card7.png";
import SecServiceCard from "../Components/cards/SecServceCarde";
import Footer from "../Components/footer/Footer";

const SpecializedServices = () => {
  const service = [
    {
      id: 1,
      imgg: card5,
      text: "Marine Support Solution",
      desc: "We provide process & pressure safety, technical & vessel operation support, subsea life of field services etc.",
      btn: "Show More ",
    },
    {
      id: 2,
      imgg: card6,
      text: "Valves and Actuation",
      desc: "We provide process & pressure safety, technical & vessel operation support, subsea life of field services etc.",
      btn: "Show More ",
    },
    {
      id: 3,
      imgg: card7,
      text: "Engineering",
      desc: "We provide process & pressure safety, technical & vessel operation support, subsea life of field services etc.",
      btn: "Show More ",
    },
    {
      id: 4,
      imgg: card5,
      text: "Marine Support Solution",
      desc: "We provide process & pressure safety, technical & vessel operation support, subsea life of field services etc.",
      btn: "Show More ",
    },
    {
      id: 5,
      imgg: card6,
      text: "Valves and Actuation",
      desc: "We provide process & pressure safety, technical & vessel operation support, subsea life of field services etc.",
      btn: "Show More ",
    },
    {
      id: 6,
      imgg: card7,
      text: "Engineering",
      desc: "We provide process & pressure safety, technical & vessel operation support, subsea life of field services etc.",
      btn: "Show More ",
    },
    {
      id: 7,
      imgg: card5,
      text: "Marine Support Solution",
      desc: "We provide process & pressure safety, technical & vessel operation support, subsea life of field services etc.",
      btn: "Show More ",
    },
    {
      id: 8,
      imgg: card6,
      text: "Valves and Actuation",
      desc: "We provide process & pressure safety, technical & vessel operation support, subsea life of field services etc.",
      btn: "Show More ",
    },
    {
      id: 9,
      imgg: card7,
      text: "Engineering",
      desc: "We provide process & pressure safety, technical & vessel operation support, subsea life of field services etc.",
      btn: "Show More ",
    },
  ];
  return (
    <div>
      <div className="relative h-full ">
        <div
          className=" bg-cover bg-center overflow-y-hidden w-full text-white h-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${require("../Assets/Aboutimg.png")})`,
          }}
        >
          <div className="lg:px-24 md:px-10 px-8 text-center lg:py-[120px] md:py-[132px] py-[124px] bg-black items-center grid h-full justify-center w-full bg-opacity-50">
            <p className="text-animation lg:text-[70px] md:text-[70px] text-[40px] text-center leading-tight lg:w-[843px] font-bold font-trueno">
              Specialized Services
            </p>
          </div>
        </div>
      </div>

      {/* Exceptional Services We Provide */}
      <div className="lg:px-24 md:px-10 px-8 py-16">
        <div className=" grid justify-center items-center">
          <p className=" text-center text-[40px] font-trueno">
            <span className="text-center text-[40px] font-trueno text-yellow">
              Specialized Services 
            </span>
            We Provide
          </p>
        </div>
        <div className=" py-10">
          <SecServiceCard service={service} />
        </div>
      </div>

      {/* Footer */}
      <div className=" bg-gray">
        <Footer />
      </div>
    </div>
  );
};

export default SpecializedServices;
