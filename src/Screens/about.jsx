import React from "react";
import Footer from "../Components/footer/Footer";

const About = () => {
  return (
    <div className="">
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
        <div className=" grid justify-center items-center">
          <p className=" text-yellow font-trueno text-[40px]">BOED Energy</p>
        </div>
        <div className=" lg:flex md:grid grid justify-center gap-32 pt-10">
          <div className=" lg:w-1/2 md:w-full w-full">
            <p className=" text-justify">
              BOED is a multi-sector support service company operating across
              Africa. Our sector participation spans from Oil and Gas to
              Construction to Marine and Energy Sector  to Process Industries
              with unique solutions in Procurement, Engineering, Safety
              Solutions, Marine, ICT, and other special solutions. Our focus is
              on delivering exceptional Engineering, Procurement, Automation,
              Instrumentation and Safety support services tailored to the
              customer’s need. As a major procurement, engineering, and Safety
              solutions company, it is imperative that we not only have
              world-class resources and expertise but that we are also
              trustworthy, committed, and translucent in our activities. We are
              fixed on adhering to the timeline while concentrating on the minor
              detail of any of our projects. Our determination in persistent
              training and capacity building of our personnel has allowed us to
              earn the trust of our clients and establish strong collaboration
              with all our customers. This business attitude has also helped us
              build closer working interactions, which we have seen consistently
              lead to increased levels of services and a more effective
              engineering outcome.
            </p>
          </div>
          <div className=" lg:w-1/2 md:w-full w-full grid justify-end">
            <img
              className=" w-[678px] h-[414px]"
              src={require("../Assets/Rectangle111.png")}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Vision, Mission, VALUES */}
      <div className="lg:px-24 md:px-10 px-8 lg:flex md:grid grid gap-16">
        <div className=" lg:w-3/5 md:w-full w-full grid gap-5">
          <div className=" bg-[#FDEACB] text-black rounded-3xl w-full px-5 py-4">
            <p className=" text-[20px] font-trueno">Vision</p>
            <p>
              To be a partner with sustainable energy solutions and real
              solution commitment that goes beyond the service of our market
              spectrum to become the foremost company in our chosen sectors.
            </p>
          </div>
          <div className="bg-[#FDEACB] text-black rounded-3xl w-full px-5 py-4">
            <p className=" text-[20px] font-trueno">Mission</p>
            <p>
              To be the responsive one-stop shop outfit for all the sectors we
              support with these value chains by offering a broad range of
              cost-effective solutions. Maintain a robust inventory of
              equipment, parts, and products.
            </p>
            <p className=" py-4">
              Provide repair services to a diverse customer base across multiple
              sectors and many more, as well deliver stakeholders’ value to our
              strategic partners and employees and commercial value to our
              customers.
            </p>
          </div>
        </div>
        {/*  */}
        <div className=" lg:w-2/5 md:w-full w-full ">
          <div className="bg-[#FDEACB] text-black rounded-3xl w-full space-y-5 px-5 py-4">
            <p className=" text-[20px] font-trueno">VALUES</p>
            <p>
              <span className=" font-trueno text-[18px]">Excellence: </span>to
              channel all resources at perfect and seamless delivery
            </p>
            <p>
              <span className=" font-trueno text-[18px]">Customization: </span>
              to We aim at providing bespoke solutions tailored at meeting
              customer’s needs.
            </p>
            <p>
              <span className=" font-trueno text-[18px]">Performance: </span>
              We aim to be best in class with results, in offering our customer
              value added service, to achieve excellence, in an ethical and
              responsible way.
            </p>
            <p>
              <span className=" font-trueno text-[18px]">Responsibility: </span>
              BUED takes pride in keeping our deliverable with safety as our
              first duty, wherever we are. No compromise, at all levels.
            </p>
          </div>
        </div>
      </div>

      {/* What We Represent */}
      <div className="lg:px-24 md:px-10 px-8 py-16">
        <div className=" grid justify-center items-center">
          <p className=" text-center text-[40px] font-trueno">
            What{" "}
            <span className=" text-[40px] text-yellow font-trueno"> We </span>
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
          {/* Card 2 */}
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
          {/* card 3 */}
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
          {/* Card 4 */}
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
          {/* Card 5 */}
          <div className=" flex gap-5">
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
          <div className=" flex gap-5">
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
