import React, { useEffect } from "react";
import Footer from "../Components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
              <span className=" text-wrapper ">About Us</span>
            </p>
          </div>
        </div>
      </div>

      <div className="lg:px-24 md:px-10 px-8 pb-10 pt-14">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className=" grid justify-center items-center"
        >
          <p className=" text-yellow font-trueno text-[40px]">BOED Energy</p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className=" lg:flex md:grid grid justify-center  pt-10"
        >
          <div className=" lg:w-1/2 md:w-full w-full bg-[#F7A21C] space-y-5 py-4 px-8">
            <div>
              <p className=" font-trueno text-[45px]">BOED Energy</p>
              <p>
                We are a full-stream energy solutions provider. We own and
                develop natural resources facilities, and also act as energy
                partners for our clients.
              </p>
            </div>
            <div className=" space-y-5">
              <p className=" text-[20px] font-trueno text-black">
                Empowering Production
              </p>
              <p>
                We are independent and diversified natural resources and energy
                solutions, provider. We own and develop natural resources
                facilities, provide a wide range of field services and act as
                energy partners for our clients.
              </p>
            </div>
          </div>
          <div className=" lg:w-1/2 md:w-full w-full grid justify-end">
            <img
              data-aos="fade-left"
              data-aos-duration="3000"
              className=" w-[678px] h-[414px]"
              src={require("../Assets/Rectangle111.png")}
              alt=""
            />
          </div>
        </div>
      </div>

      {/*  */}

      {/* Vision, Mission,*/}
      <div className="lg:px-24 md:px-10 px-8 lg:flex md:grid gap-16 py-10 items-center justify-center">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className=" lg:w-1/2 md:w-full w-full flex items-center"
        >
          <img src={require("../Assets/left.png")} alt="" />
          <div className=" grid justify-center absolute lg:w-[425px] ml-10 lg:pr-0 md:pr-0 pr-8">
            <div className="flex items-center justify-center ">
              <img
                className=" w-[46px] h-[46px]"
                src={require("../Assets/Eye.png")}
                alt=""
              />
              <p className=" font-trueno text-[#F7A21C] text-[20px]">Vision</p>
            </div>
            <div className=" pt-5">
              <p className=" text-center">
                To become the preferred world-class energy solutions
                provider in Nigeria
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className=" lg:w-1/2 md:w-full w-full flex items-center relative"
        >
          <div className=" grid justify-center absolute lg:w-[425px] lg:pr-0 md:pr-5 pr-2">
            <div className="flex items-center justify-center">
              <img
                className=" w-[46px] h-[36.85px]"
                src={require("../Assets/pngwing.png")}
                alt=""
              />
              <p className=" font-trueno text-[#F7A21C] text-[20px]">Mission</p>
            </div>
            <div className=" pt-3">
              <p className=" text-center">
                To continuously execute value-adding, industry-leading services
                and solutions that are client-focused, in the most economically
                efficient, environmentally-friendly, socially responsible, and
                sustainable manner for the benefit of all stakeholders.
              </p>
            </div>
          </div>
          <img src={require("../Assets/right.png")} alt="" />
        </div>
      </div>

      {/* What We Represent */}
      {/* What We Represent */}
      <div
        style={{
          backgroundImage: `url(${require("../Assets/mapp.png")})`,
        }}
        className="lg:px-24 md:px-10 px-8 py-10 bg-cover bg-center"
      >
        <div
          data-aos="fade-up"
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

        <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-10 pt-5">
          {/* Card 1 */}
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className=" flex gap-5"
          >
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
          {/* Card 2 */}
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className=" flex gap-5"
          >
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
          {/* card 3 */}
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className=" flex gap-5"
          >
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
          {/* Card 4 */}
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className=" flex gap-5"
          >
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
          {/* Card 5 */}
          <div
            data-aos="fade-down"
            data-aos-duration="3000"
            className=" flex gap-5"
          >
            <img
              className=" w-[51px] h-[51px]"
              src={require("../Assets/Group177.png")}
              alt=""
            />
            <div className=" grid">
              <p className=" font-trueno text-[20px]">Commitment:</p>
              <p className="">
                Our methodology manages the success of every project to
                guarantee that Clients’ expectations are always meet.
              </p>
            </div>
          </div>
          {/* Card 6 */}
          <div
            data-aos="fade-down"
            data-aos-duration="3000"
            className=" flex gap-5"
          >
            <img
              className=" w-[51px] h-[51px]"
              src={require("../Assets/Group188.png")}
              alt=""
            />
            <div className=" grid">
              <p className=" font-trueno text-[20px]"> Quality:</p>
              <p className="">
                We have steady Performance Improvement & Value Proposition in
                everything We Do
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className=" bg-gray">
        <Footer />
      </div>
    </div>
  );
};

export default About;
