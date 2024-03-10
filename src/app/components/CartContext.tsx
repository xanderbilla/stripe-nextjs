'use client';

import { createContext, useContext, useState, ReactNode } from "react";

interface CartContextTypes {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: Product) => void;
  increaseQuantity: (productId: Product) => void;
  decreaseQuantity: (productId: Product) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextTypes | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const productInCart = cart.findIndex((item) => item.id === product.id);
    if (productInCart !== -1) {
      const updatedItem = [...cart];
      updatedItem[productInCart].quantity += 1;
      setCart(updatedItem);
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId: Product) => {
    setCart(cart.filter((product) => product.id !== productId.id));
  };

  const increaseQuantity = (productId: Product) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId.id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId: Product) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId.id) {
        const newQuantity = product.quantity - 1;
        return { ...product, quantity: newQuantity >= 0 ? newQuantity : 0 };
      }
      return product;
    });
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextTypes => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
