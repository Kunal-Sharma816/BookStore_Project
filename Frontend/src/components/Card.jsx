import React, { useState, useEffect } from "react";
import useCartStore from "../store/CartStore";

function Card({ id, name, price, image, category, title }) {
  const { cart, addToCart } = useCartStore(); // Subscribe to store state
  const [quantity, setQuantity] = useState(0);

  // Update quantity when the cart changes
  useEffect(() => {
    const item = cart.find((p) => p.id === id);
    setQuantity(item ? item.quantity : 0);
  }, [cart, id]); // ✅ Re-run when cart updates

  const handleAddToCart = () => {
    const product = {
      id,
      name,
      image,
      title,
      price,
      category,
      quantity: quantity + 1, // Ensure increment
    };
    addToCart(product);
  };

  return (
    <div className="mt-4 my-3 p-2">
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <p>{title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">₹ {price}</div>
            <div className="card-actions justify-end">
              <button
                className="px-2 py-1 bg-pink-500 hover:bg-pink-600 duration-100 border-[2px] hover:text-white h-8 w-24 text-xs rounded-3xl dark:bg-slate-500 dark:text-white"
                onClick={handleAddToCart}
              >
                {quantity > 0 ? `Added (${quantity})` : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
