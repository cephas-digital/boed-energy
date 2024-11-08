import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavService from "./NavService";
import { Link } from "react-router-dom";
import { useActiveLink } from "../scroll-to/ActiveLinkContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isServices, setIsServices] = useState(false);
  const [isSpecializedServices, setIsSpecializedServices] = useState(false);
  const { activeLink, setActive } = useActiveLink();
  // const [activeLink, setActiveLink] = useState("");

  // const handleLinkClick = (link) => {
  //   setActiveLink(link);
  // };

  const handleSpecializedServices = () => {
    setIsSpecializedServices(!isSpecializedServices);

    setIsServices(false);
  };
  const closeSpecializedServices = () => {
    setIsSpecializedServices(false);
  };

  const handleServices = () => {
    setIsServices(!isServices);

    setIsSpecializedServices(false);
  };
  const closeServices = () => {
    setIsServices(false);
  };

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const closeOpen = () => {
    setIsOpen(false);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` lg:px-24 md:px-10 px-8 flex items-center justify-between z-40 left-0 right-0 py-2 ${
        isSticky ? "fixed top-0 bg-white " : ""
      }`}
    >
      <div>
        <img
          className="lg:w-[140px] md:w-[140px] w-[120px] lg:h-[75px] md:h-[75px] h-[55px] "
          src={require("../../Assets/BoedLogo.png")}
          alt=""
        />
      </div>
      <ul className=" lg:flex md:hidden hidden items-center gap-8">
        <Link
          // onClick={() => handleLinkClick("/")}
          onClick={() => setActive("/")}
          to="/"
          className={` text-black hover:text-deepyellow cursor-pointer ${
            activeLink === "/" && "text-deepyellow"
          }`}
        >
          Home
        </Link>
        <Link
          onClick={() => setActive("/about")}
          to="/about"
          className={`cursor-pointer hover:text-deepyellow ${
            activeLink === "/about" && "text-deepyellow"
          }`}
        >
          About
        </Link>
        <Link
          onClick={() => setActive("/service")}
          to="/service"
          className={`flex items-center  justify-between cursor-pointer hover:text-deepyellow ${
            activeLink === "/service" && "text-deepyellow"
          } `}
        >
          Services
          <svg
            onClick={handleServices}
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2 mt-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 12.586l-4.293-4.293a1 1 0 0 1 1.414-1.414L10 10.172l3.293-3.293a1 1 0 0 1 1.414 1.414L10 12.586z"
              clip-rule="evenodd"
            />
          </svg>
        </Link>
        <div className=" absolute top-[170px] z-20 ">
          {isServices && (
            <div className=" bg-white  text-black w-[374px] p-5 overflow-y-scroll h-[300px]">
              <Link to="/procurement" className="  " onClick={closeServices}>
                <p className=" w-full border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white">
                  {" "}
                  Procurement
                </p>
              </Link>
              <Link to="/engineering" className=" " onClick={closeServices}>
                <p className="border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white ">
                  Engineering
                </p>
              </Link>
              <Link
                to="/metering_and_instrumentation"
                onClick={closeServices}
                className=" "
              >
                <p className=" border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white">
                  Metering & Instrumentation
                </p>
              </Link>
              <Link to="/inspection" onClick={closeServices} className=" ">
                <p className="border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white ">
                  Inspection & Maintenance Services
                </p>
              </Link>
              <Link
                to="/safety_solutions"
                onClick={closeServices}
                className=" "
              >
                <p className="border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white ">
                  Safety Solutions
                </p>
              </Link>
              <Link
                to="/integrated_security_and_fire_solutions"
                onClick={closeServices}
                className=""
              >
                <p className=" border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white">
                  Integrated Security and Fire Solutions
                </p>
              </Link>
              <Link
                to="/marine_support_solutions"
                onClick={closeServices}
                className=" "
              >
                <p className="border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white ">
                  Marine Support Solutions
                </p>
              </Link>
              <Link
                to="/valves_and_actuation_services"
                onClick={closeServices}
                className=" "
              >
                <p className=" border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white">
                  Valves and Actuation
                </p>
              </Link>
              <Link to="/it_services" onClick={closeServices} className=" ">
                <p className=" border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white">
                  IT Services
                </p>
              </Link>
            </div>
          )}
        </div>

        {/* Spe... */}
        <Link
          onClick={() => setActive("/specialized_services")}
          to="/specialized_services"
          className={`flex items-center justify-between cursor-pointer hover:text-deepyellow ${
            activeLink === "/specialized_services" && "text-deepyellow"
          }`}
        >
          Specialized Services
          <svg
            onClick={handleSpecializedServices}
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2 mt-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 12.586l-4.293-4.293a1 1 0 0 1 1.414-1.414L10 10.172l3.293-3.293a1 1 0 0 1 1.414 1.414L10 12.586z"
              clip-rule="evenodd"
            />
          </svg>
        </Link>
        <div className=" absolute top-[170px] left-[500px]  z-20 ">
          {isSpecializedServices && (
            <div className=" bg-white  text-black w-[374px] p-5  h-[300px]">
              <Link
                to="/pipe_lifting_system"
                className="  "
                onClick={closeSpecializedServices}
              >
                <p className=" w-full border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white">
                  {" "}
                  Pipe Lifting System
                </p>
              </Link>
              <Link
                to="/safe_isolation_of_passing_valves"
                className=" "
                onClick={closeSpecializedServices}
              >
                <p className="border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white ">
                  Safe Isolation of Passing Valves
                </p>
              </Link>
              <Link
                to="/leak_detection_solution"
                onClick={closeSpecializedServices}
                className=" "
              >
                <p className=" border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white">
                  Leak Detection Solution
                </p>
              </Link>
              <Link
                to="/fire_suppression"
                onClick={closeSpecializedServices}
                className=" "
              >
                <p className="border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white ">
                  Fire Suppression
                </p>
              </Link>
              <Link
                to="/oil_spill_and_waste_water_solutions"
                onClick={closeSpecializedServices}
                className=" "
              >
                <p className="border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white ">
                  Oil Spill and Waste Water Solutions
                </p>
              </Link>
              <Link
                to="/turbines_and_rotating_equipment_solutions"
                onClick={closeSpecializedServices}
                className=""
              >
                <p className=" border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white">
                  Turbines and Rotating  Equipment Solutions
                </p>
              </Link>
            </div>
          )}
        </div>

        <Link
          onClick={() => setActive("/projects")}
          to="/projects"
          className={`cursor-pointer hover:text-deepyellow ${
            activeLink === "/projects" && "text-deepyellow"
          }`}
        >
          Projects
        </Link>
        <Link
          onClick={() => setActive("/market_focus")}
          to="/market_focus"
          className={`cursor-pointer hover:text-deepyellow ${
            activeLink === "/market_focus" && "text-deepyellow"
          }`}
        >
          Market Focus
        </Link>
        <Link
          onClick={() => setActive("/contact")}
          to="/contact"
          className={`cursor-pointer hover:text-deepyellow ${
            activeLink === "/contact" && "text-deepyellow"
          }`}
        >
          Contact
        </Link>
      </ul>
      {/* <div className=" lg:block md:block hidden">
        <img
          className=" w-[32px] h-[32px]"
          src={require("../../Assets/MagnifyingGlass.png")}
          alt=""
        />
      </div> */}
      <div
        onClick={toggleIsOpen}
        className=" lg:hidden md:block block cursor-pointer"
      >
        <GiHamburgerMenu size={24} />
      </div>
      {isOpen && (
        <div className="lg:hidden md:block block md:w-[550px] w-full text-white absolute bg-gray z-20 px-10 py-5 right-0 md:top-48 top-0 left-0 ">
          <div
            onClick={closeOpen}
            className=" text-[24px] font-trueno flex justify-end "
          >
            <p>X</p>
          </div>
          <ul className=" grid items-center gap-8">
            <Link
              to="/"
              onClick={closeNavbar}
              className=" text-deepyellow cursor-pointer"
            >
              Home
            </Link>
            <Link to="/about" onClick={closeNavbar} className=" cursor-pointer">
              About
            </Link>
            <Link
              to="/service"
              className="flex items-center justify-between cursor-pointer"
            >
              <p onClick={closeNavbar}>Services</p>

              <svg
                onClick={handleServices}
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.586l-4.293-4.293a1 1 0 0 1 1.414-1.414L10 10.172l3.293-3.293a1 1 0 0 1 1.414 1.414L10 12.586z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
            <div className=" absolute top-[180px] z-20 ">
              {isServices && (
                <div className=" bg-white  text-black lg:w-[374px] md:w-[374px] mt-5 w-full h-auto p-5">
                  <Link to="/procurement" className="" onClick={closeServices}>
                    <p className=" border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white ">
                      Procurement
                    </p>
                  </Link>
                  <Link to="/engineering" className=" " onClick={closeServices}>
                    <p className="border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white">
                      Engineering
                    </p>
                  </Link>
                  <Link
                    to="/metering_and_instrumentation"
                    onClick={closeServices}
                    className=" "
                  >
                    <p className="border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white">
                      Metering & Instrumentation
                    </p>
                  </Link>
                  <Link to="/inspection" onClick={closeServices} className=" ">
                    <p className="border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white ">
                      Inspection & Maintenance Services
                    </p>
                  </Link>
                  <Link
                    to="/safety_solutions"
                    onClick={closeServices}
                    className=""
                  >
                    <p className=" border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white "></p>
                    Safety Solutions
                  </Link>
                  <Link
                    to="/integrated_security_and_fire_solutions"
                    onClick={closeServices}
                    className=" "
                  >
                    <p className="border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white">
                      Integrated Security and Fire Solutions
                    </p>
                  </Link>
                  <Link
                    to="/marine_support_solutions"
                    onClick={closeServices}
                    className=" "
                  >
                    <p className=" border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white">
                      Marine Support Solutions
                    </p>
                  </Link>
                  <Link
                    to="/valves_and_actuation_services"
                    onClick={closeServices}
                    className=""
                  >
                    <p className=" border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white">
                      Valves and Actuation
                    </p>
                  </Link>
                  <Link to="/it_services" onClick={closeServices} className="">
                    <p className=" border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white">
                      IT Services
                    </p>
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/specialized_services"
              className="flex items-center justify-between cursor-pointer"
            >
              <p onClick={closeNavbar} className="">
                Specialized Services
              </p>

              <svg
                onClick={handleSpecializedServices}
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.586l-4.293-4.293a1 1 0 0 1 1.414-1.414L10 10.172l3.293-3.293a1 1 0 0 1 1.414 1.414L10 12.586z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
            <div className=" absolute right-0 md:bottom-[-140px] bottom-0  z-20 ">
              {isSpecializedServices && (
                <div className=" bg-white  text-black w-[374px] p-5  overflow-y-scroll h-[300px]">
                  <Link
                    to="/pipe_lifting_system"
                    className="  "
                    onClick={closeSpecializedServices}
                  >
                    <p className=" w-full border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white">
                      {" "}
                      Pipe Lifting System
                    </p>
                  </Link>
                  <Link
                    to="/safe_isolation_of_passing_valves"
                    className=" "
                    onClick={closeSpecializedServices}
                  >
                    <p className="border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white ">
                      Safe Isolation of Passing Valves
                    </p>
                  </Link>
                  <Link
                    to="/leak_detection_solution"
                    onClick={closeSpecializedServices}
                    className=" "
                  >
                    <p className=" border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white">
                      Leak Detection Solution
                    </p>
                  </Link>
                  <Link
                    to="/fire_suppression"
                    onClick={closeSpecializedServices}
                    className=" "
                  >
                    <p className="border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white ">
                      Fire Suppression
                    </p>
                  </Link>
                  <Link
                    to="/oil_spill_and_waste_water_solutions"
                    onClick={closeSpecializedServices}
                    className=" "
                  >
                    <p className="border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white ">
                      Oil Spill and Waste Water Solutions
                    </p>
                  </Link>
                  <Link
                    to="/turbines_and_rotating_equipment_solutions"
                    onClick={closeSpecializedServices}
                    className=""
                  >
                    <p className=" border-b-[0.8px] border-b-[#000000] cursor-pointer py-2 hover:bg-deepyellow hover:text-white">
                      Turbines and Rotating  Equipment Solutions
                    </p>
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/projects"
              onClick={closeNavbar}
              className="cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="/market_focus"
              onClick={closeNavbar}
              className="cursor-pointer"
            >
              Market Focus
            </Link>
            <Link to="/contact" className="cursor-pointer">
              Contact
            </Link>
          </ul>
          {/* <div className=" lg:hidden md:hidden block py-5">
            <img
              className=" w-[32px] h-[32px]"
              src={require("../../Assets/MagnifyingGlass.png")}
              alt=""
            />
          </div> */}
          {/* Buttons */}
          <div className=" lg:hidden md:hidden block py-5 items-center gap-5">
            <NavService />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
