import React from "react";

function Card({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-2">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline"> ${item.price}</div>
              <div className="card-actions justify-end">
                <button className="px-2 py-1 bg-white hover:bg-pink-500  duration-100 border-[2px] hover:text-white h-8  w-24 text-xs rounded-3xl dark:bg-slate-500 dark:text-white">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
