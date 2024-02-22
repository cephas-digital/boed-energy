import React from "react";
import ServiceMenu from "../Components/cards/ServiceMenu";
import SpecializedServiceCard from "../Components/cards/SpecializedServices";
import OurClients from "../Components/our-clients/OurClients";
import Footer from "../Components/footer/Footer";

const SafeIsolation = () => {
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
              Safe Isolation of Passing Valves
            </p>
          </div>
        </div>
      </div>

      {/*Procurement Services  */}
      <div className="lg:px-24 md:px-10 px-8 pt-10  lg:flex md:grid grid items-center gap-10">
        <div className=" lg:w-[75%] md:w-full w-full">
          <p className=" text-[20px] font-trueno text-black py-5">
            Safe Isolation of Passing Valves
          </p>
          <img
            className=" lg:h-[564px] w-full "
            src={require("../Assets/Rectangle362.png")}
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
            The DBB-SAVER is used to fully prevent any leakage through either a
            Double Block & Bleed valve configuration or through a Single
            Isolation valve (e.g., ball, gate or plug valve).
          </p>
          <p>How it works</p>

          <p>
            The working principle of the DBB-SAVER makes leakage to the safe
            working area physically impossible. It works by creating,
            maintaining, and monitoring of a vacuum in the bleed section in a
            classical Double Block & Bleed configuration but also can be
            deployed in most Single Valve Isolations.
          </p>

          <p>The bleed volume can either be the section between:</p>
          <ol className=" list-decimal pl-10">
            <li>both block valves in a classical DB&B configuration, or</li>
            <li>
              both seats in the body of a single valve, e.g., most ball, plug or
              gate valves, or
            </li>
            <li>
              any other combination of isolating device, like balloons, mud
              plugs, control valves, etc.
            </li>
          </ol>
          <p>
            We are not greasing or sealing and do not affect the condition or
            the performance of the valve whatsoever. It is a temporary solution
            only for the duration of the downstream maintenance works when the
            valves are locked closed.
          </p>
          <p>
            The DBB-SAVER is completely failed safe. In case the in-line leakage
            exceeds the capacity of the DBB-SAVER, an alarm will be raised. The
            alarm will be audible and visible on the location of the leaking
            valve, but also via wireless remote data transfer on the safe
            workplace and on a separate alarm monitor in the control room
          </p>
          <p>
            Our method has been Shell approved, for worldwide use on all their
            assets. Also, other major Oil and Gas companies have approved our
            unique method. Interested? Please contact us for more information.
          </p>
          <p>When to use the DBB-SAVER</p>
          <p>
            The DBB-SAVER is used when maintenance work must be executed on a
            piece of equipment, whilst bordering installation parts remain
            pressurized and available for operations.
          </p>
          <p>
            This piece of equipment must be isolated. This is done by valves.
            Sometimes, valves are only the initial isolation, which makes it
            possible to safely place blind flanges afterwards.
          </p>
          <p>
            Either when working on the equipment directly behind the isolation
            valves or when placing a blind flange, the isolation valves should
            not have a leak rate beyond the companies pre-defined standards to
            ensure a safe working place. In case of explosive and/or toxic media
            the standard is often tight shut off (TSO), which means zero
            leakage.
          </p>
          <p>
            The valves can be in a Double Block & Bleed configuration or in a
            Single Valve configuration (like the example in the picture). In
            practice, regrettably, the valves often leak beyond the company’s
            maximum standard. The appliance of a DBB-SAVER guarantees a safe
            workplace, even if the valve(s) are passing heavily. Without any
            modifications to the valves themselves, for the full duration of the
            job.
          </p>
          <p>
            Besides mitigating the leakage for 100%, the DBB-SAVER will monitor
            the bleed section automatically every second, instead of an operator
            checking them every shift or so. The human factor and the subjective
            assessment of the leak rate is taken out of the equation, and the
            DBB-SAVER does all the work with regards to the periodical checks.
            So, even when the valves are not leaking, the appliance of a
            DBB-SAVER is beneficial to ensure a safe workplace for the workers
            on the downstream equipment without compromise!
          </p>
          <p>
            After the maintenance is finished, the DBB-SAVER can be disconnected
            and easily stored in the warehouse. The size of the DBB-SAVER is
            1200x800mm (euro pallet size) so fits in most racks. Deviating sizes
            available on request.
          </p>
        </div>
        <div className=" lg:w-[35%] md:w-full w-full">
          <SpecializedServiceCard />
        </div>
      </div>

      {/* Our Clients */}
      <div className="lg:px-24 md:px-10 px-8 h-full  lg:pt-10 md:pt-10 pt-10 pb-5">
        <p className=" text-center font-trueno lg:text-[40px] md:text-[40px] text-[30px]">
          Our{" "}
          <span className=" text-yellow font-trueno lg:text-[40px] md:text-[40px] text-[30px]">
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

export default SafeIsolation;
