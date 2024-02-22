import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/style.css";
import ServiceCard from "../Components/cards/ServiceCard";
import card5 from "../Assets/card5.png";
import card6 from "../Assets/card6.png";
import card7 from "../Assets/card7.png";
import MySwiperComponent from "../Components/cards/TestimonialCarousel";
import Footer from "../Components/footer/Footer";
import OurClients from "../Components/our-clients/OurClients";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: false, // Set to true for right to left sliding
  };

  return (
    <div>
      <div className=" overflow-x-hidden overflow-y-hidden xl:h-full lg:h-[100vh] md:h-full h-full">
        <div className="">
          <Slider {...settings} className="  h-full">
            <div className=" ">
              <div
                className="  bg-cover bg-center overflow-y-hidden text-white w-full h-full flex items-center justify-center"
                style={{
                  backgroundImage: `url(${require("../Assets/slide1.png")})`,
                }}
              >
                <div className="lg:px-24 md:px-10 px-8 text-center lg:py-28 md:py-44 py-28 bg-black items-center grid h-full justify-center w-full bg-opacity-50">
                  <p className="lg:text-[70px] md:text-[70px] text-[50px] text-center leading-tight lg:w-[843px] font-bold font-trueno">
                    Bring the aspirations into the real world
                  </p>
                  <div className=" grid mt-2 justify-center items-center">
                    <p className="mt-2 text-center lg:w-[380px]">
                      From dream to design to development, we engage highly
                      trained construction engineers and professionals with
                      wealth of knowledge and innovation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="relative ">
              <div
                className=" bg-cover bg-center overflow-y-hidden w-full text-white h-full flex items-center justify-center"
                style={{
                  backgroundImage: `url(${require("../Assets/slide2.png")})`,
                }}
              >
                <div className="lg:px-24 md:px-10 px-8 text-center lg:py-[68px] md:py-[132px] py-[124px] bg-black items-center grid h-full justify-center w-full bg-opacity-50">
                  <p className="lg:text-[70px] md:text-[70px] text-[40px] text-center leading-tight lg:w-[843px] font-bold font-trueno">
                    Shove aside the boundaries in the oil and gas industry
                  </p>
                  <div className=" grid mt-2 justify-center items-center">
                    <p className="mt-2 text-center lg:w-[380px]">
                      BOED Energy is steps ahead in pioneering new frontiers and
                      response to emerging trends on quality services driven by
                      our expatriates in partnership with skilled foreign
                      affiliates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="relative ">
              <div
                className=" bg-cover bg-center overflow-y-hidden w-full text-white h-full flex items-center justify-center"
                style={{
                  backgroundImage: `url(${require("../Assets/slide3.png")})`,
                }}
              >
                <div className="lg:px-24 md:px-10 px-8 text-center lg:py-28 md:py-[132px] py-[124px] bg-black items-center grid h-full justify-center w-full bg-opacity-50">
                  <p className="lg:text-[70px] md:text-[70px] text-[50px] text-center leading-tight lg:w-[843px] font-bold font-trueno">
                    New breakthroughs, infinite opportunities.
                  </p>
                  <div className=" grid mt-2 justify-center items-center">
                    <p className="mt-2 text-center lg:w-[380px]">
                      Our focus is on delivering exceptional Engineering,
                      Procurement, Automation, Instrumentation and Safety
                      support services tailored to the customer’s need
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* Our Clients */}
      <div className="lg:px-24 md:px-10 px-8 h-full  lg:pt-10 md:pt-10 pt-10 pb-5">
        <p
          data-aos="fade-left"
          data-aos-duration="3000"
          className=" text-center font-trueno text-[48px]"
        >
          Our{" "}
          <span className=" text-yellow font-trueno text-[48px]">Clients</span>
        </p>
        <div>
          <OurClients />
        </div>
      </div>

      {/* BOED Energy */}
      <div className="lg:px-24 md:px-10 px-8 lg:flex md:grid grid gap-20 pt-10 pb-10">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className=" lg:w-1/2 md:w-full w-full grid gap-10"
        >
          <div className=" grid gap-8">
            <p className=" text-yellow font-trueno text-[40px]">BOED Energy</p>
            <p className=" text-[14px] font-trueno text-justify">
              BOED Energy is a multi-sector support service company operating
              across Africa. Our sector participation spans from Oil and Gas to
              Construction to Marine and Energy Sector  to Process Industries
              with unique solutions in Procurement, Engineering, Safety
              Solutions, Marine, ICT, and other special solutions. Our focus is
              on delivering exceptional Engineering, Procurement, Automation,
              Instrumentation and Safety support services tailored to the
              customer’s need. As a major procurement, engineering, and Safety
              solutions company, it is imperative that we not only have
              world-class resources and expertise but that we are also
              trustworthy, committed, and translucent in our activities.
            </p>
          </div>

          <div>
            <button className="btn41-43 btn-42 flex items-center px-4 py-2 bg-gray text-white">
              <span>Read More</span>
              <span className="ml-1">&#62;</span>
              <span className="ml-1">&#62;</span>
            </button>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className=" lg:w-1/2 md:w-full w-full flex items-center gap-5 "
        >
          {/* <img
            className=" h-[458px]"
            src={require("../Assets/Group1.png")}
            alt=""
          /> */}
          <div className=" grid gap-5">
            <img src={require("../Assets/Rectangle1.png")} alt="" />
            <img src={require("../Assets/Rectangle2.png")} alt="" />
          </div>
          <div className=" grid gap-5">
            <img src={require("../Assets/Rectangle3.png")} alt="" />
            <img src={require("../Assets/Rectangle4.png")} alt="" />
          </div>
        </div>
      </div>

      <div className=" bg-[#FDECD2] lg:px-24 md:px-10 px-8 pb-10">
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className=" grid justify-center items-center py-10"
        >
          <p className=" text-center lg:text-[40px] md:text-[40px] text-[30px] font-trueno">
            Exceptional{" "}
            <span className="lg:text-[40px] md:text-[40px] text-[30px] font-trueno text-yellow">
               Services 
            </span>
            We Provide
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" grid justify-center items-center"
        >
          <ServiceCard service={service} />
        </div>
      </div>

      {/* What We Represent */}
      <div className="lg:px-24 md:px-10 px-8 py-10">
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className=" grid justify-center items-center"
        >
          <p className=" text-center lg:text-[40px] md:text-[40px] text-[30px] font-trueno">
            What{" "}
            <span className=" lg:text-[40px] md:text-[40px] text-[30px] text-yellow font-trueno">
               We 
            </span>
            Represent
          </p>
          <p className=" font-truno font-normal text-center lg:w-[650px] md:w-full w-full py-5">
            BOED Energy is a response to emerging trends on how quality services
            should be rendered in our market focus area, in partnership with
            skilled foreign affiliates and highly experienced professionals.
          </p>
        </div>
        <div className=" lg:flex md:grid grid gap-32 items-center justify-center pt-10">
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className=" lg:w-1/2 md:w-full w-full"
          >
            <img
              className=" "
              src={require("../Assets/Rectangle14.png")}
              alt=""
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className=" lg:w-1/2 md:w-full w-full grid gap-5"
          >
            {/* Card 1 */}
            <div className=" flex gap-5">
              <img
                className=" w-[51px] h-[51px]"
                src={require("../Assets/Group13.png")}
                alt=""
              />
              <div className=" grid">
                <p className=" font-trueno text-[20px]">Performance:</p>
                <p className=" ">
                  We assist customers by contributing to budgets efficiencies,
                  improved performance, and reduced timelines – even in the face
                  of tight and complex projects
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className=" flex gap-5">
              <img
                className=" w-[51px] h-[51px]"
                src={require("../Assets/Group14.png")}
                alt=""
              />
              <div className=" grid">
                <p className=" font-trueno text-[20px]">Experience:</p>
                <p className="">
                  We take pride in our personnels, and partners’ experiences,
                  engineered equipment & the value we render to clients.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className=" flex gap-5">
              <img
                className=" w-[51px] h-[51px]"
                src={require("../Assets/Group15.png")}
                alt=""
              />
              <div className=" grid">
                <p className=" font-trueno text-[20px]">Safety:</p>
                <p className=" ">
                  We have high safety standards and a strong commitment to
                  achieving zero accidents.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className=" flex gap-5">
              <img
                className=" w-[51px] h-[51px]"
                src={require("../Assets/Group16.png")}
                alt=""
              />
              <div className=" grid">
                <p className=" font-trueno text-[20px]">Value:</p>
                <p className=" ">
                  We take pride in our continuous improvement efforts and our
                  commitment to best practices, which has added value to our
                  clients’ experience of us..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="lg:px-24 md:px-10 px-8  pt-16 pb-10"
      >
        <div className=" grid justify-center items-center">
          <p className="font-trueno lg:text-[40px] md:text-[40px] text-[30px] text-center">
            What People{" "}
            <span className=" font-trueno lg:text-[40px] md:text-[40px] text-[30px] text-yellow">
              Say
            </span>
          </p>
        </div>
        <MySwiperComponent />
      </div>

      {/* Footer */}
      <div className=" bg-gray">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
