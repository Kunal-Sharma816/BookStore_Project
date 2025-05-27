import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

import Card from "./Card";

function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) => data.category === "free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log("GET ERROR: ", error);
      }
    };

    getBook();
  }, []);

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
            {book.map((item) => (
              <Card
                key={item.id || item.name}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                category={item.category}
                title={item.title}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
