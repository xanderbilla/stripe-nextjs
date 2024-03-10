import React from "react";
import ProductCard from "../components/ui/ProductCard";

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

type Props = {
    data: Product[];
};

export default function ProductLayout({data}: Props) {
return (
    <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-start justify-start w-full text-2xl">
            E-Commerce | Shop
        </div>
        <div className="flex items-start justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((product: Product) => (
                    <ProductCard data={product} key={product.id} />
                ))}
            </div>
        </div>
    </div>
);
}
