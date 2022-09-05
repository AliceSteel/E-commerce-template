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

const removeFunc = (cartItems, productToRem) => {
    //find the item in the cart to remove:
    const findItem = cartItems.find(el => el.id===productToRem.id);
    //check if qty is equal to 1, so we can remove the whole product from cart:
    if(findItem.qty === 1){
        return cartItems.filter(item => item.id !== productToRem.id);
    }//otherwise we decrease it by 1:
    return cartItems.map((item) => 
    (item.id===productToRem.id) ? {...item, qty: item.qty - 1} 
    : item);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
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

    const removeItemFromCart = (cartItemToRem) => {
        setCartItems(addFunc(cartItems, cartItemToRem));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}