"use client";

import React, { useState } from "react";
import { useCart } from "../CartContext";

type Props = {};

export default function Cart({}: Props) {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

    const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ products: cart }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        if (response.url) {
          window.location.href = response.url;
          // console.log(response.url);
        }
      });
  };

  return (
    <>
    {cart.length > 0 ? (
      <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex items-start justify-start w-full text-2xl">
        Cart | Summary
      </div>
      <div
        className="min-h-28 w-full border py-4 flex flex-col md:flex-row items-center justify-center gap-4 md:px-6 
      rounded-e-xl shadow-lg hover:shadow-xl transition duration-500 rounded-lg"
      >
        <div className="flex-[2] flex-col flex gap-4 w-full">
          {cart.map((product) => (
            <div className="w-full border p-4 rounded-md" key={product.id}>
              <div className="w-full flex items-center justify-between">
                <div className="flex flex-col items-start justify-start">
                  <div className="text-xl font-semibold">{product.name}</div>
                  <div className="text-base opacity-60 font-medium">
                    {product.price} x {product.quantity}
                  </div>
                </div>
                <div className="flex items-center justify-center border border-black rounded-sm">
                  <button
                    className="h-10 w-8 text-xl focus:outline-none hover:bg-slate-500"
                    onClick={() => decreaseQuantity(product)}
                  >
                    -
                  </button>
                  <div className="h-10 w-8 flex items-center justify-center focus:outline-none">
                    {product.quantity}
                  </div>
                  <button
                    className="h-10 w-8 text-xl focus:outline-none hover:bg-slate-500"
                    onClick={() => increaseQuantity(product)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 w-full flex flex-col flex-1 items-center justify-center gap-4">
          <div className="text-xl font-medium">Summary</div>
          <div className="w-full text-lg flex flex-col items-center justify-center gap-2">
            <div className="w-full flex items-center justify-between">
              <div className="">Total</div>
              <div className="">&#8377;{totalAmount}</div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="">Discount</div>
              <div className="">&#8377;0</div>
            </div>
          </div>
          <button
            className={`w-full bg-black text-white text-lg font-medium py-2 rounded-md ${loading ? "cursor-not-allowed opacity-50" : "hover:bg-slate-500"}`}
            onClick={handleCheckout}
          >
            {loading ? "Loading..." : "Checkout"}
          </button>
        </div>
      </div>
    </div>
      ):
      <div className="flex items-center justify-center"></div>}
    </>
  );
}
