import React from "react";
import ServiceMenu from "../Components/cards/ServiceMenu";
import SpecializedServiceCard from "../Components/cards/SpecializedServices";
import OurClients from "../Components/our-clients/OurClients";
import Footer from "../Components/footer/Footer";

const ItService = () => {
  return (
    <div className=" overflow-x-hidden">
      <div className="relative h-full ">
        <div
          className=" bg-cover bg-center overflow-y-hidden w-full text-white h-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${require("../Assets/Aboutimg.png")})`,
          }}
        >
          <div className="lg:px-0 md:px-10 px-8 text-center lg:py-[120px] md:py-[132px] py-[124px] bg-black items-center grid h-full justify-center w-full bg-opacity-50">
            <p className="text-animation lg:text-[60px] md:text-[70px] text-[40px] text-center leading-tight  font-bold font-trueno">
              IT Services
            </p>
          </div>
        </div>
      </div>

      {/*Procurement Services  */}
      <div className="lg:px-24 md:px-10 px-8 pt-10  lg:flex md:grid grid items-center gap-10">
        <div className=" lg:w-[75%] md:w-full w-full">
          <p className=" text-[20px] font-trueno text-black py-5">
            IT Services
          </p>
          <img
            className=" lg:h-[564px] w-full "
            src={require("../Assets/Rectangle368.png")}
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
            We understand the essential role that technology plays in the
            success of modern businesses; that's why we're dedicated to
            providing complete IT solutions to meet the unique needs of your
            organization. We proudly collaborate with industry leaders such as
            HP and Cisco to deliver tailored IT solutions. With our expertise,
            we'll help you utilize technology to drive growth, boost efficiency,
            and stay ahead in the competitive landscape.
          </p>

          <p className=" pt-10">
            Explore our services that cater to all your tech needs, ensuring
            smooth and efficient business operations
          </p>

          <p>
            <span className=" font-trueno">
              {" "}
              Repair and Maintenance Services:
            </span>
            Our skilled technicians deliver timely and dependable repair and
            maintenance solutions, ensuring the smooth operation of your
            systems. Whether it's troubleshooting hardware glitches or enhancing
            software performance, count on us for comprehensive support.
          </p>
          <p>
            <p className="font-trueno">Laptop Sales:</p>
            Discover our wide range of laptops designed to meet various needs,
            whether for business or personal use. Find the perfect balance of
            portability and power in our selection.
          </p>
          <p>
            <p className=" font-trueno">Hardware Sales: </p>
            Upgrade your infrastructure with our range of hardware solutions,
            including servers, networking equipment, and many more. We offer
            high-quality products from trusted manufacturers to ensure top
            performance and reliability for your digital infrastructure.
          </p>
          <p>
            <p className=" font-trueno"> Software Sales:</p>
            Stay ahead of the curve with our diverse software solutions.
            Including productivity suites and specialized business applications,
            our software offerings cover a wide range of needs. Our team can
            help you find the right software solutions to drive your workflows
            and drive growth.
          </p>
          <p className=" pt-10">
            Our IT solutions offer a comprehensive range of services to support
            your business's technological needs. From proficient repair services
            to the provision of high-quality hardware and software, we are
            committed to ensuring the seamless operation of your systems and the
            success of your enterprise.
          </p>
        </div>
        <div className=" lg:w-[35%] md:w-full w-full">
          <SpecializedServiceCard />
        </div>
      </div>

      {/* Our Clients */}
      <div className="lg:px-24 md:px-10 px-8 h-full  lg:pt-10 md:pt-10 pt-10 pb-5">
        <p className=" text-center font-trueno lg:text-[48px] md:text-[40px] text-[30px]">
          Our{" "}
          <span className=" text-yellow font-trueno lg:text-[48px] md:text-[40px] text-[30px]">
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

export default ItService;
