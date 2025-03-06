import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
    let totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalItems);
  }, []);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
    let totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalItems);
  };

  const calculateSubtotal = () => {
    let total = cartItems.reduce(
      (total, item) => total + item.quantity * 100, // Assume ₹100 for each item
      0
    );
    return total;
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ cartCount, cartItems, updateCartCount, calculateSubtotal, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
