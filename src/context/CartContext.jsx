import { createContext, useContext, useEffect, useState } from "react";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(cart);


        let totalItem = cart.reduce((total, item) => total + item.quantity, 0)
        setCartCount(totalItem);
    }, [])

    const updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(cart);

        let totalItem = cart.reduce((total, item) => total + item.quantity, 0)
        setCartCount(totalItem);
    }


    const clearCart = ()=>{
        setCartItems([])
        setCartCount(0)
        localStorage.removeItem("cart");
    }
    return (
        <CartContext.Provider value={{ cartCount, updateCartCount, cartItems , clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext);
