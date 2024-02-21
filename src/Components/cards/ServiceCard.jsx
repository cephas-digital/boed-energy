import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      {service.map((items) => (
        <div
          key={items.id}
          className=" lg:w-[316px] md:w-[306px] w-full bg-white px-5 py-5 rounded-2xl"
        >
          <div className=" grid justify-center items-center">
            <img src={items.imgg} alt="" />
          </div>
          <p className=" text-center font-trueno text-black text-[18px] py-5">
            {items.text}
          </p>
          <p className=" text-center ">{items.desc}</p>
          <div className="flex justify-center items-center pt-8 pb-4">
            <button className=" bn632-hover bn23 rounded-2xl absolute w-[169px] h-[47px] flex justify-start items-center pl-4">
              {items.btn}
            </button>
            <img
              className=" relative z-20 left-[50px] w-[24px] h-[24px]"
              src={require("../../Assets/CaretDoubleRight.png")}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
