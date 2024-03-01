import React, { useEffect } from "react";
import ServiceMenu from "../Components/cards/ServiceMenu";
import SpecializedServiceCard from "../Components/cards/SpecializedServices";

import Footer from "../Components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MarketFocus = () => {
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
              <span class="text-wrapper">Market Focus</span>
            </p>
          </div>
        </div>
      </div>

      {/* Our Market Focus */}
      <div className="lg:px-24 md:px-10 px-8 py-16">
        <p
          data-aos="fade-down"
          data-aos-duration="3000"
          className=" text-center font-trueno lg:text-[40px] md:text-[40px] text-[30px]"
        >
          Our{" "}
          <span className="text-center font-trueno lg:text-[40px] md:text-[40px] text-[30px] text-yellow pt-10">
             Market Focus
          </span>
        </p>
        <div className=" lg:flex md:grid grid gap-10 mt-5">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className=" lg:w-[75%] md:w-full w-full"
          >
            <img
              className=" lg:h-[564px] w-full"
              src={require("../Assets/Rectangle312.png")}
              alt=""
            />
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="3000"
            className=" lg:w-[35%] md:w-full w-full"
          >
            <ServiceMenu />
          </div>
        </div>
      </div>

      {/*Oil and Gas  */}
      <div className=" lg:px-24 md:px-10 px-8 pt-16 lg:flex md:grid grid gap-10 items-center">
        <div className=" lg:w-[75%] md:w-full w-full grid gap-10">
          <p className=" text-yellow font-trueno text-[20px]">Oil and Gas</p>

          <div data-aos="fade-right" data-aos-duration="3000">
            <p>
              The Oil & Gas industry, with its complex processes and critical
              infrastructures, has certain key business imperatives that include
              enhanced operational excellence, market-driven price optimization,
              a consistent need for operational expenditure reduction, top-class
              safety, and security systems and many more.
            </p>
            <br /> <br />
            <p>
              Since its inception in 2017, T Triangle has steadily come to be
              one of the very top, most trusted and sought-after partners in the
              Oil & Gas Industry within her serve area.
            </p>{" "}
            <br /> <br />
            <p>
              Our team of internationally trained experts delivers not just
              solutions but also the application engineering expertise to solve
              any industry challenge. With our solution portfolio, we can
              address the critical requirements of the entire Oil & Gas Value
              Chain, covering.
            </p>
            <div className=" mt-5 grid gap-2">
              <div className=" flex items-center gap-4">
                <img
                  className="w-[18px] h-[18px]"
                  src={require("../Assets/Rectangle313.png")}
                  alt=""
                />
                <p>
                  {" "}
                  <span className=" font-trueno">Upstream –</span> Exploration
                  and Production
                </p>
              </div>
              <div className=" flex items-center gap-4">
                <img
                  className="w-[18px] h-[18px]"
                  src={require("../Assets/Rectangle313.png")}
                  alt=""
                />
                <p>
                  {" "}
                  <span className=" font-trueno">Midstream – </span> Pipelines,
                  Storage Facilities and LNG Processing
                </p>
              </div>
              <div className=" flex items-center gap-4">
                <img
                  className="w-[18px] h-[18px]"
                  src={require("../Assets/Rectangle313.png")}
                  alt=""
                />
                <p>
                  {" "}
                  <span className=" font-trueno">Downstream ––</span>{" "}
                  Refineries, Distribution and Retail
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className=" lg:w-[35%] md:w-full w-full"
        >
          <SpecializedServiceCard />
        </div>
      </div>

      {/*Energy  */}
      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className="lg:px-24 md:px-10 px-8"
      >
        <div className=" grid justify-center items-center gap-8">
          <p className=" text-center font-trueno lg:text-[40px] md:text-[40px] text-[30px] text-yellow">
            Energy
          </p>
          <p className=" lg:w-[630px] text-center ">
            The power sector remains the driver of an industrial economy. As
            such, BOED Energy leverages on her team of highly trained
            field-service engineers, which, combined with the in-depth technical
            experience and capacity of our partner OEMs, allow us to deliver
            cost-effective solutions to captive and grid-connected power
            producers as well as transmission and distribution companies.
          </p>
          <div className=" grid justify-center items-center gap-2">
            <div className=" flex items-center gap-4">
              <img
                className="w-[18px] h-[18px]"
                src={require("../Assets/Rectangle313.png")}
                alt=""
              />
              <p className=" font-trueno">Generation</p>
            </div>
            <div className=" flex items-center gap-4">
              <img
                className="w-[18px] h-[18px]"
                src={require("../Assets/Rectangle313.png")}
                alt=""
              />
              <p className=" font-trueno">Transmission</p>
            </div>
          </div>
        </div>
      </div>

      {/*Process Industries  */}
      <div
        data-aos="fade-right"
        data-aos-duration="3000"
        className="lg:px-24 md:px-10 px-8 py-16"
      >
        <div className=" grid justify-center items-center gap-8">
          <p className=" text-center font-trueno lg:text-[40px] md:text-[40px] text-[30px] text-yellow">
            Process Industries
          </p>
          <p className=" lg:w-[630px] text-center ">
            Being the leading automation, process, and system integration
            company in our region, T Triangle has evolved into a total solution
            provider for several process industries including the Food and
            Beverage industry.
          </p>
          <p className=" lg:w-[630px] text-center ">
            Our value proposition over the years has been to provide cutting
            edge yet cost-effective solutions for the sustainability of the
            business operations of the Food and Beverage companies in the region
            operate in.
          </p>
          <p className=" lg:w-[630px] text-center ">
            In consideration of the criticality of the Food and Beverage
            industry to the Nigerian economy, BOED Energy remains committed to
            offering solutions that will not only boost the operating margins
            but improve the overall bottom-line of our clients.
          </p>
          <p className=" lg:w-[630px] text-center ">
            As such, we continue to provide high-quality values for process
            control, accurate measurement solutions for liquid, solid and gas
            measurement, process solutions such as pumps and compressors to
            convey process fluids, electrical and instrumentation solutions to
            energize and monitor the factory and supply chain services to
            procure plant equipment required for maintenance, repairs, and
            operations.
          </p>
          <div className=" grid justify-center items-center gap-2">
            <div className=" flex items-center gap-4">
              <img
                className="w-[18px] h-[18px]"
                src={require("../Assets/Rectangle313.png")}
                alt=""
              />
              <p className=" font-trueno">Food and Beverages</p>
            </div>
            <div className=" flex items-center gap-4">
              <img
                className="w-[18px] h-[18px]"
                src={require("../Assets/Rectangle313.png")}
                alt=""
              />
              <p className=" font-trueno">Chemicals</p>
            </div>
            <div className=" flex items-center gap-4">
              <img
                className="w-[18px] h-[18px]"
                src={require("../Assets/Rectangle313.png")}
                alt=""
              />
              <p className=" font-trueno">Cement</p>
            </div>
          </div>
        </div>
      </div>

      {/*Marine Industries  */}
      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="lg:px-24 md:px-10 px-8 pb-10"
      >
        <div className=" grid justify-center items-center gap-8">
          <div className=" ">
            <p className=" text-center font-trueno lg:text-[40px] md:text-[40px] text-[30px] text-yellow">
              Marine Industries
            </p>
            <p className=" lg:w-[630px] text-center mt-5">
              Our maritime focus span across all maritime activities such as
              Offshore assets, FPSO, Ships, Barges, Naval Boat and Subsea
              activities by majoring in all the fundamentals required to stay
              safe and compliant.
            </p>
            <p className=" lg:w-[630px] text-center ">
              Which includes both products and services from lifeboats and
              evacuation systems to Life rafts, personal protective gear, gas
              detectors and firefighting equipment etc.world-leading premier IT
              infrastructure, Audio Video CCTV, Cables, IoT, KVM and Networking
              solutions in maritime industry, our marine automation, alarm and
              monitoring systems are all well-built.
            </p>
          </div>

          <div className=" grid justify-center items-center gap-2">
            <div className=" flex items-center gap-4">
              <img
                className="w-[18px] h-[18px]"
                src={require("../Assets/Rectangle313.png")}
                alt=""
              />
              <p className=" font-trueno">Food and Beverages</p>
            </div>
            <div className=" flex items-center gap-4">
              <img
                className="w-[18px] h-[18px]"
                src={require("../Assets/Rectangle313.png")}
                alt=""
              />
              <p className=" font-trueno">Chemicals</p>
            </div>
            <div className=" flex items-center gap-4">
              <img
                className="w-[18px] h-[18px]"
                src={require("../Assets/Rectangle313.png")}
                alt=""
              />
              <p className=" font-trueno">Cement</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Clients */}
      <div className="lg:px-24 md:px-10 px-8 h-full  lg:pt-10 md:pt-10 pt-10 pb-10">
        <p
          data-aos="fade-right"
          data-aos-duration="3000"
          className=" text-center font-trueno lg:text-[40px] md:text-[40px] text-[30px]"
        >
          Our{" "}
          <span className=" text-yellow font-trueno lg:text-[40px] md:text-[40px] text-[30px]">
            Clients
          </span>
        </p>
        {/* <div>
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

export default MarketFocus;
