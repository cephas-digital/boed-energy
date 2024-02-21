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
      text: "Chief Donatus Dede",
      description:
        "A team of highly professionals with integrity. This is a company i will do business with over and again because of their prompt delivery and professional approach to handling issues.",
      img: stars,
    },
    {
      id: 2,
      text: "Chief Donatus",
      description:
        "A team of highly professionals with integrity. This is a company i will do business with over and again because of their prompt delivery and professional approach to handling issues.",
      img: stars,
    },
    {
      id: 3,
      text: "Chief Donatus Dede",
      description:
        "A team of highly professionals with integrity. This is a company i will do business with over and again because of their prompt delivery and professional approach to handling issues.",
      img: stars,
    },
    {
      id: 4,
      text: "Donatus Dede",
      description:
        "A team of highly professionals with integrity. This is a company i will do business with over and again because of their prompt delivery and professional approach to handling issues.",
      img: stars,
    },
    {
      id: 5,
      text: "Chief Donatus Dede",
      description:
        "A team of highly professionals with integrity. This is a company i will do business with over and again because of their prompt delivery and professional approach to handling issues.",
      img: stars,
    },
    {
      id: 6,
      text: "Chief Dede",
      description:
        "A team of highly professionals with integrity. This is a company i will do business with over and again because of their prompt delivery and professional approach to handling issues.",
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
