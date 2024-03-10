import ProductLayout from "@/app/Layout/ProductLayout";
import Cart from "@/app/components/ui/Cart";
import React from "react";

type Props = {};

const products: Product[] = [
    { id: 1, name: "Casual Set", price: 1500, image: "/products/Casual-Set.jpg", quantity: 1 },
    { id: 2, name: "Men Wear", price: 1600, image: "/products/Men-Wear.jpg", quantity: 1 },
    { id: 3, name: "Red Dress", price: 4400, image: "/products/Red-Dress.jpg", quantity: 1 },
  ];
  
export const metadata = () => {
  return {
    title: "Shop | UNDEFINED",
    description: "Shop page",
  };
};

export default function page({}: Props) {
  
    return (
        <main className="w-full min-h-[70vh] flex flex-col gap-8 py-8 px-12 md:px-24">
            <ProductLayout data={products}/>
            <Cart />
        </main>
    );
}
