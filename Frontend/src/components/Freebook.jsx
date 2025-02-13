import React from "react";
import list from "../../public/list.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Card from "./Card";

function Freebook() {
  const filterdata = list.filter((data) => data.category === "free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // console.log(filterdata)
  return (
    <>
      <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semi-bold text-2xl pb-4 ">Free Books</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ut
            tenetur minus repellendus deserunt earum nam ex, doloribus alias!
            Sunt.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {filterdata.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
