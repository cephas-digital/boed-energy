import React from "react";
import client1 from "../../Assets/client1.png";
import client2 from "../../Assets/client2.png";

const OurClients = () => {
  const clients = [
    {
      id: 1,
      img: client1,
    },
    {
      id: 2,
      img: client2,
    },
    {
      id: 1,
      img: client1,
    },
    {
      id: 2,
      img: client2,
    },
    {
      id: 1,
      img: client1,
    },
    {
      id: 2,
      img: client2,
    },
    {
      id: 1,
      img: client1,
    },
    {
      id: 2,
      img: client2,
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
