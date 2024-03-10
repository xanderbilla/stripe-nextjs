'use client'

import Image from "next/image";
import React from "react";
import { useCart } from "../CartContext";

type Props = {
  data: {
    id: number;
    image: string;
    name: string;
    price: number;
    quantity: number;
  };
};

export default function ProductCard({ data }: Props) {

  const {addToCart, cart} = useCart();

  const isProductInCart = cart.some((product) => product.id === data.id);


  return (
    <div className="min-h-auto flex justify-center items-center">
      <div className="container flex justify-center">
        <div className="max-w-sm">
          <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <Image
              className="rounded-t-lg"
              src={data.image}
              alt={data.name}
              width={500}
              height={500}
            />
            <div className="py-6 px-8 rounded-lg bg-white">
              <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                {data.name}
              </h1>
              <button
                className={`mt-6 py-2 px-4 bg-black text-base text-white font-medium rounded-lg shadow-md 
                hover:shadow-lg transition duration-300 ${isProductInCart ? 'cursor-not-allowed bg-gray-800/50' : 'hover:bg-gray-800'}`}
              onClick={() => addToCart(data)}
              disabled={isProductInCart}
              >
                {isProductInCart ? 'Added' : 'Add to cart'}
              </button>
            </div>
            <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
              <span className="text-md">&#8377;{data.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
