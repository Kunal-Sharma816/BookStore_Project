import React from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/CartStore";

function CartSection() {
  const { cart, totalPrice, addToCart, removeFromCart } = useCartStore();
  const navigate = useNavigate();

  // ✅ Correct tax calculation (assuming 8% tax rate)
  const tax = totalPrice * 0.08;

  const handleContinueShopping = () => {
    navigate("/course");  // Navigate back to the course section
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl mt-20">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <div className="card-actions mt-4">
              <button
                className="w-full h-12 bg-pink-600 rounded-md text-white"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 mt-12">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body p-0">
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item , index) => (
                        <tr key={item.id??index}>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  {/* ✅ Display image or placeholder */}
                                  <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name || "Course"}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">{item.name}</div>
                                <div className="text-sm opacity-70">
                                  {item.category || "No category"}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>₹{item.price ? item.price.toFixed(2) : "N/A"}</td>
                          <td>
                            <div className="flex items-center">
                              <button
                                className="btn btn-xs btn-circle btn-ghost"
                                onClick={() => addToCart(item, -1)}
                              >
                                <FaMinus size={10} />
                              </button>
                              <span className="mx-2">{item.quantity}</span>
                              <button
                                className="btn btn-xs btn-circle btn-ghost"
                                onClick={() => addToCart(item, 1)}
                              >
                                <FaPlus size={10} />
                              </button>
                            </div>
                          </td>
                          <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                          <td>
                            <button
                              className="btn btn-ghost btn-circle"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <FaTrash className="text-error" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Order Summary</h2>
                <div className="divider my-2"></div>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Tax (8%)</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="divider my-2"></div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{(totalPrice + tax).toFixed(2)}</span>
                </div>
                <div className="card-actions mt-6">
                  <button className="btn btn-primary btn-block">
                    Proceed to Checkout
                  </button>
                </div>
                <div className="card-actions mt-2">
                  <button
                    className="w-full h-12 bg-pink-600 rounded-md text-white"
                    onClick={handleContinueShopping}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartSection;
