import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" py-10">
      <div className=" lg:px-16 md:px-10 px-8 ">
        <div>
          <img
            className="w-[197px] h-[110px]"
            src={require("../../Assets/logo.png")}
            alt=""
          />
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 md:gap-5 gap-5 pt-8">
          <div className=" grid gap-5">
            <div>
              <p className=" text-white font-trueno text-[20px]">Contact</p>
              <p className="text-white font-trueno text-[20px]">Details</p>
            </div>

            <div className=" flex items-center w-[280px] gap-2">
              <img
                className=" w-[40px] h-[40px]"
                src={require("../../Assets/MapPinLine.png")}
                alt=""
              />
              <p className=" text-white">
                5 Eseghene Close, Warri Delta State, Nigeria.
              </p>
            </div>
            <div className=" flex items-center w-[280px] gap-2">
              <img
                className=" w-[40px] h-[40px]"
                src={require("../../Assets/PhoneCall.png")}
                alt=""
              />
              <div>
                <p className=" text-white">NG +2349031762727</p>
                <p className=" text-white">NG +2349087300448</p>
              </div>
            </div>
            <div className=" flex items-center w-[280px] gap-2">
              <img
                className=" w-[40px] h-[40px]"
                src={require("../../Assets/Envelope2.png")}
                alt=""
              />

              <p className=" text-white">kevinadinusor@gmail.com</p>
            </div>
            <div>
              <Link
                to="service"
                className=" rounded-md font-trueno text-[16px] px-4 py-3 bg-white"
              >
                Request Service
              </Link>
            </div>
          </div>
          {/*  */}
          <div className=" grid gap-5">
            <div>
              <p className=" text-white font-trueno text-[20px]">UK address</p>
            </div>

            <div className=" flex items-center w-[280px] gap-2">
              <img
                className=" w-[40px] h-[40px]"
                src={require("../../Assets/MapPinLine.png")}
                alt=""
              />
              <p className=" text-white">
                18 Sighthill Gardens, Edinburgh Scotland United Kingdom
              </p>
            </div>
            <div className=" flex items-center w-[280px] gap-2">
              <img
                className=" w-[40px] h-[40px]"
                src={require("../../Assets/PhoneCall.png")}
                alt=""
              />
              <div>
                <p className=" text-white">+44 7979 188208</p>
              </div>
            </div>
            <div className=" flex items-center w-[280px] gap-2">
              <img
                className=" w-[40px] h-[40px]"
                src={require("../../Assets/Envelope2.png")}
                alt=""
              />

              <p className=" text-white">info@boedenergy.com</p>
            </div>
            <div>
              <Link
                to="service"
                className=" rounded-md font-trueno text-[16px] px-4 py-3 bg-white"
              >
                Request Service
              </Link>
            </div>
          </div>

          {/*  */}
          <div className=" flex justify-center w-full gap-10">
            {/* <img src="" alt="" /> */}
            <div className=" bg-white w-[4px] h-full lg:block md:hidden hidden"></div>
            <div className=" w-full ">
              <div>
                <p className=" text-center font-trueno text-[20px] text-white">
                  Quick
                </p>
                <p className="text-center font-trueno text-[20px] pb-2 text-white w-full border border-b-[0.7] border-b-white border-t-0 border-r-0 border-l-0">
                  Menu
                </p>
              </div>
              <div className="w-full">
                <p className="text-center font-trueno py-3 text-white w-full border border-b-[0.7] border-b-white border-t-0 border-r-0 border-l-0">
                  Home
                </p>
                <p className="text-center font-trueno py-3 text-white w-full border border-b-[0.7] border-b-white border-t-0 border-r-0 border-l-0">
                  About
                </p>
                <p className="text-center font-trueno py-3 text-white w-full border border-b-[0.7] border-b-white border-t-0 border-r-0 border-l-0">
                  Services
                </p>
                <p className="text-center font-trueno py-3 text-white w-full border border-b-[0.7] border-b-white border-t-0 border-r-0 border-l-0">
                  Projects
                </p>
                <p className="text-center font-trueno py-3 text-white w-full border border-b-0 border-b-white border-t-0 border-r-0 border-l-0">
                  Contact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" py-5">
          <hr className=" text-white" />
        </div>
        <div className="lg:flex md:flex grid items-center justify-between lg:px-16 md:px-10 px-8">
          <div className=" flex items-center gap-3">
            <img
              className=" w-[37.11px] h-[37.11px]"
              src={require("../../Assets/Group 17.png")}
              alt=""
            />
            <img
              className=" w-[37.11px] h-[37.11px]"
              src={require("../../Assets/Group18.png")}
              alt=""
            />
            <img
              className=" w-[37.11px] h-[37.11px]"
              src={require("../../Assets/Group19.png")}
              alt=""
            />
            <img
              className=" w-[37.11px] h-[37.11px]"
              src={require("../../Assets/Group20.png")}
              alt=""
            />
            <p className=" text-white">@Boedenergy</p>
          </div>
          <div className=" flex">
            <p className=" text-white">
              Copyright 2024 BOED Limited. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
