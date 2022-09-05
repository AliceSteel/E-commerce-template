import { createContext, useState, useEffect } from "react";

const addFunc = (cartItems, productToAdd) => {
    //find if product is new to cart:
    const findItem = cartItems.find(el => el.id===productToAdd.id);

    if( findItem ){  //if not found then res is true
       return cartItems.map((item) => 
                    (item.id===productToAdd.id) ? {...item, qty: item.qty + 1} 
                    : item);

    } //if product exists in cart, increment qty:
    return [...cartItems,{...productToAdd, qty: 1}];   
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
})


export const CartProvider = ({children}) =>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((currTotal, currCartItem) => 
            currTotal + currCartItem.qty, 0)
        setCartCount(newCartCount);
    }, [cartItems]) 

    const addItemToCart = (productToAdd) => {
        setCartItems(addFunc(cartItems, productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}