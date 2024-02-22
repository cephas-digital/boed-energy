import React from "react";
import ServiceMenu from "../Components/cards/ServiceMenu";
import SpecializedServiceCard from "../Components/cards/SpecializedServices";
import OurClients from "../Components/our-clients/OurClients";
import Footer from "../Components/footer/Footer";

const IntegratedSecurity = () => {
  return (
    <div>
      <div className="relative h-full ">
        <div
          className=" bg-cover bg-center overflow-y-hidden w-full text-white h-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${require("../Assets/Aboutimg.png")})`,
          }}
        >
          <div className="lg:px-0 md:px-10 px-8 text-center lg:py-[120px] md:py-[132px] py-[124px] bg-black items-center grid h-full justify-center w-full bg-opacity-50">
            <p className="text-animation lg:text-[60px] md:text-[70px] text-[40px] text-center leading-tight  font-bold font-trueno">
              Integrated Security and Fire Solutions
            </p>
          </div>
        </div>
      </div>

      {/*Procurement Services  */}
      <div className="lg:px-24 md:px-10 px-8 pt-10  lg:flex md:grid grid items-center gap-10">
        <div className=" lg:w-[75%] md:w-full w-full">
          <p className=" text-[20px] font-trueno text-black py-5">
            Integrated Security and Fire Solutions
          </p>
          <img
            className=" lg:h-[564px] w-full "
            src={require("../Assets/Frame78.png")}
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
            Our core business is project-based distribution, which focuses on
            the commercial and industrial sector. The quality of our
            integrations, designs and product offering has enabled us together
            with our approved and certified partners to secure many large
            contracts and tenders globally.
          </p>

          <p>
            <span className=" font-trueno">Video Management Solutions:</span>
            Our VMS platforms offer surveillance analytics, licence plate
            recognition (LPR) solutions, people counting, heat maps, facial
            recognition, point of sale (POS) and reporting modules. This allows
            for interoperability between systems, devices, and different types
            of applications. We provide solutions for video security, access
            control, intrusion, and fire detection, building automation, traffic
            control, parking management and more. allows
          </p>

          <p>
            <span className=" font-trueno"> Surveillance Solutions:</span>
            We have a comprehensive range of video surveillance and CCTV
            solutions, fit for purpose in all commercial and industrial
            applications.
          </p>
          <p>
            Our surveillance solutions allow for the ever-increasing
            requirements related to surveillance management functions, such as
            point-of-sale, human resource management, marketing functions,
            access control integration, on- and off-site video monitoring and
            surveillance analytics
          </p>
          <p>
            <p className=" font-trueno">Thermal Solutions: </p>
            Thermal Solutions: The use of thermal imagery to detect people and
            objects is a premise widely accepted in military and commercial
            applications, given all objects emit some level of infrared energy.
            Most thermal cameras, however, are typically deployed on the edge of
            perimeters and are limited to fixed fields of view. Built on a
            premise of doing more with less, Thermal Radar™ protects from the
            “inside out” and provides a continuous, 360o coverage area, much
            like a typical radar system offers.
          </p>
          <p>
            <p className=" font-trueno">Access Control Solutions: </p>
            We offer a comprehensive range of access control products, which
            seamlessly integrate into our video management system solutions.
          </p>
          <p>
            Perimeter Protection Solutions Emergency Warning and Mass
            Notification solutions
          </p>
          <p>
            Perimeter protection is an important asset for industrial,
            commercial, public or private residential sites. We offer a complete
            range of reliable and intelligent perimeter protection systems, both
            for indoor and outdoor security needs.
          </p>
          <p>
            We use passive infrared and doppler technologies to ensure total
            protection of applicable sites. Our products include cutting edge
            intelligent warning signal analysis systems that integrate with
            perimeter protection systems, ensuring complete protection for all
            kinds of sites.
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
        <div className=" py-10">
          <OurClients />
        </div>
      </div>

      {/* Footer */}
      <div className=" bg-gray">
        <Footer />
      </div>
    </div>
  );
};

export default IntegratedSecurity;
