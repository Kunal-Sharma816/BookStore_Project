import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer';
import CartSection from '../components/CartSection.jsx';

function Cart() {
  return (
    <>
      <div>
        <Navbar/>
        <div className="">
            <CartSection/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Cart
