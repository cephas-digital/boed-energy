import React from "react";

const OurClients = () => {
  const clients = [
    {
      id: 1,
      img: require("../../Assets/Cl1.jpg"),
    },
    {
      id: 2,
      img: require("../../Assets/Cl6.jpg"),
    },
    {
      id: 3,
      img: require("../../Assets/Cl2.jpg"),
    },
    {
      id: 4,
      img: require("../../Assets/Cl4.jpg"),
    },
    {
      id: 5,
      img: require("../../Assets/Cl5.jpg"),
    },
    {
      id: 6,
      img: require("../../Assets/Cl3.jpg"),
    },

    {
      id: 7,
      img: require("../../Assets/Cl8.jpg"),
    },
  ];
  return (
    <div className="marquee-container">
      {/* <div className="marquee h-full py-5 relative flex pt-10 w-full">
        {clients.map((items) => (
          <div key={items.id} className="marquee-item ">
            <img
              className=" lg:w-[182.17px] md:w-[182.17px] w-auto lg:h-[75.25px] md:h-[75.25px] h-auto "
              src={items.img}
              alt=""
            />
          </div>
        ))}
      </div> */}
      <div className="marquee flex py-5">
        {clients.map((item) => (
          <img
            key={item.id}
            className="marquee-item w-[182px] h-[75px]  "
            src={item.img}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default OurClients;
