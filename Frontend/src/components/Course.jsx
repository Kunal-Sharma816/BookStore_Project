import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((item) => item.category === "paid");
        console.log("Fetched Books:", data);
        setBook(data);
      } catch (error) {
        console.log("GET ERROR: ", error);
      }
    };

    getBook();
  }, []);
  console.log("Book", book);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
          suscipit deleniti labore laudantium quos, repellendus officia error
          aut omnis dignissimos accusantium, fugit quisquam tenetur. Recusandae,
          totam officiis eveniet quasi et praesentium quas id voluptates.
        </p>
        <Link to="/">
          <button className="mt-4 bg-pink-500 text-white rounded-xl px-4 py-2 hover:bg-pink-700 duration-200">
            Back
          </button>
        </Link>
      </div>

      {/* Show message if no books are available */}
      {book.length === 0 ? (
        <h2 className="text-center mt-10">No Paid Books Available</h2>
      ) : (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {book.map((item) => (
            <Card
              key={item.id || item.name}
              {...item}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Course;
