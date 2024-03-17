import React from "react";
import stars from "../../Assets/stars.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/style.css";

const TestimonialCarousel = () => {
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //   };

  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const data = [
    {
      id: 1,
      text: "Dr. Abena Kwesi",
      description:
        "Boed Energy has proven to be a beacon of reliability and professionalism in the energy sector. Their commitment to excellence and prompt delivery is commendable. I am grateful for their exceptional service and look forward to continued collaboration.",
      img: stars,
    },
    {
      id: 2,
      text: "Eng Tunde Adebayo",
      description:
        "A team of highly professionals with integrity. This is a company i will do business with over and again because of their prompt delivery and professional approach to handling issues.",
      img: stars,
    },
    {
      id: 3,
      text: "Chief Donatus Dede",
      description:
        "I am impressed by the efficiency and professionalism demonstrated by Boed Energy. Their team's dedication to excellence and integrity sets them apart in the industry. I am confident in recommending their services to others seeking reliable energy solutions.",
      img: stars,
    },
    {
      id: 4,
      text: "Dr. Temitope Adewale",
      description:
        "Boed Energy has consistently delivered exceptional service with integrity and professionalism. Their prompt response and attention to detail have made them our preferred energy provider. I am grateful for their reliable service and look forward to future collaborations.",
      img: stars,
    },
    {
      id: 5,
      text: "Mr. Chukwudi Eze",
      description:
        "I am delighted to share my positive experience with Boed Energy. Their team's commitment to excellence and prompt delivery have exceeded my expectations. I highly recommend their services to anyone in need of reliable energy solutions.",
      img: stars,
    },
    {
      id: 6,
      text: "Mrs. Efe Okonkwo",
      description:
        "Boed Energy has consistently delivered exceptional service with integrity and professionalism. Their prompt response and attention to detail have made them our preferred energy provider. I am grateful for their reliable service and look forward to future collaborations.",
      img: stars,
    },
  ];
  return (
    <div className=" w-3/4 m-auto">
      <div className=" py-10">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.id} className="slick-slide">
              <div className="  bg-[#FDEACB] lg:w-[257px] md:w-[257px] px-4 py-5 h-[auto] rounded-3xl border-[0.5px] border-yellow justify-center grid items-center custom-slide-content">
                <div className=" grid gap-10 items-center ">
                  <p className="text-center text-[20px] font-trueno">
                    {d.text}
                  </p>
                  <p className="text-center">{d.description}</p>

                  <div className=" flex items-center justify-center">
                    <img
                      className=" w-[24px] h-[24px]"
                      src={require("../../Assets/Vector.png")}
                      alt=""
                    />
                    <img
                      className=" w-[24px] h-[24px]"
                      src={require("../../Assets/Vector.png")}
                      alt=""
                    />
                    <img
                      className=" w-[24px] h-[24px]"
                      src={require("../../Assets/Vector.png")}
                      alt=""
                    />
                    <img
                      className=" w-[24px] h-[24px]"
                      src={require("../../Assets/Vector.png")}
                      alt=""
                    />
                    <img
                      className=" w-[24px] h-[24px]"
                      src={require("../../Assets/Vector.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
