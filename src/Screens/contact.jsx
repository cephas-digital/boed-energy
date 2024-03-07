import React, { useEffect } from "react";
import Footer from "../Components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
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
              <span className=" text-wrapper ">Contact</span>
            </p>
          </div>
        </div>
      </div>

      {/* Get In Touch */}
      <div className="lg:px-24 md:px-10 px-8 pt-16 pb-10 lg:flex md:grid grid gap-10">
        <div className=" lg:w-[50%] md:w-full w-full">
          <form
            data-aos="fade-left"
            data-aos-duration="3000"
            action=""
            className=" bg-[#FDEACB] w-full h-full p-10 gap-5 grid"
          >
            <p className=" text-center font-trueno text-[20px]">
              Send Us a Message
            </p>
            <p className=" text-center">
              Thank you for contacting us. Kindly fill the form below to get in
              touch with us. Our representative will get in touch with you
              within 48 hours
            </p>
            <div className=" grid gap-5">
              <input
                className="bg-[#FDEACB] w-full h-[47px] border-[0.5px] border-gray rounded-md px-2"
                placeholder="Ful Name"
                type="text"
                name=""
                id=""
              />
              <input
                className="bg-[#FDEACB] w-full h-[47px] border-[0.5px] border-gray rounded-md px-2"
                placeholder="Telephone"
                type="text"
                name=""
                id=""
              />
              <input
                className="bg-[#FDEACB] w-full h-[47px] border-[0.5px] border-gray rounded-md px-2"
                placeholder="Email"
                type="text"
                name=""
                id=""
              />
              <textarea
                className="bg-[#FDEACB] w-full h-[77px] border-[0.5px] border-gray rounded-md px-2"
                placeholder="Message"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className=" grid justify-center items-center">
              <button className=" w-[251px] h-[64px] bg-[#000] text-white rounded-md font-trueno">
                Send
              </button>
            </div>
          </form>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className=" lg:w-[50%] md:w-full w-full"
        >
          <img src={require("../Assets/Map.png")} alt="" />
        </div>
      </div>

      {/*Nigeria, US */}
      <div className="lg:px-24 md:px-10 px-8 pt-10 pb-10">
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className=" bg-[#FDEACB] p-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between items-center"
        >
          <div className=" lg:w-[280px] grid gap-5">
            <p className=" text-[20px] font-trueno">Nigeria</p>
            <div className=" flex items-center gap-2">
              <img
                className=" w-[40px] h-[40px]"
                src={require("../Assets/cont1.png")}
                alt=""
              />
              <p>5 Eseghene Close, Warri Delta State, Nigeria.</p>
            </div>
            <div className=" flex items-center gap-2">
              <img
                className=" w-[40px] h-[40px]"
                src={require("../Assets/cont2.png")}
                alt=""
              />
              <div>
                <p>NG +2349031762727</p>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <img
                className=" w-[40px] h-[40px]"
                src={require("../Assets/cont3.png")}
                alt=""
              />
              <p>kevinadinusor@gmail.com</p>
            </div>
          </div>

          {/*  */}
          <div className=" lg:w-[280px] grid gap-5 lg:pt-0 md:pt-0 pt-10">
            <p className=" text-[20px] font-trueno">US</p>
            <div className=" flex items-center gap-2">
              <img
                className=" w-[40px] h-[40px]"
                src={require("../Assets/cont1.png")}
                alt=""
              />
              <p>18 Sighthill Gardens, Edinburgh Scotland United Kingdom</p>
            </div>
            <div className=" flex items-center gap-2">
              <img
                className=" w-[40px] h-[40px]"
                src={require("../Assets/cont2.png")}
                alt=""
              />

              <p>+44 7979 188208</p>
            </div>
            <div className=" flex items-center gap-2 ">
              <img
                className=" w-[40px] h-[40px]"
                src={require("../Assets/cont3.png")}
                alt=""
              />
              <p>info@boedenergy.com</p>
            </div>
          </div>

          <div className=" ">
            <div className=" grid justify-center items-center lg:pt-0 md:pt-10 pt-10">
              <img
                className=" w-[#297px] h-[90px]"
                src={require("../Assets/contlogo.png")}
                alt=""
              />
            </div>

            <div className=" flex items-center justify-center gap-2 py-3">
              <img
                className=" w-[37.11px] h-[37.11px]"
                src={require("../Assets/cont4.png")}
                alt=""
              />
              <img
                className=" w-[37.11px] h-[37.11px]"
                src={require("../Assets/cont5.png")}
                alt=""
              />
              <img
                className=" w-[37.11px] h-[37.11px]"
                src={require("../Assets/cont6.png")}
                alt=""
              />
              <img
                className=" w-[37.11px] h-[37.11px]"
                src={require("../Assets/cont7.png")}
                alt=""
              />
            </div>
            <div>
              <p className=" text-center text-[20px] font-trueno">
                @Boedenergy
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

export default Contact;
