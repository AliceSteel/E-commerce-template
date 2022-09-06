import { createContext, useState, useEffect } from "react";

/* ADDING LOGIC:============================================================== */
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
/* REMOVING 1 item LOGIC=============================================================== */
const removeFunc = (cartItems, productToRem) => {
    //find the item in the cart to remove:
    const findItem = cartItems.find(el => el.id===productToRem.id);

    //check if qty is equal to 1, so we can remove the whole product from cart:
    if(findItem.qty === 1){
        return cartItems.filter(item => item.id !== productToRem.id);//returns new array without item
    }
    //otherwise we decrease it by 1:
    return cartItems.map((item) => 
    (item.id===productToRem.id)
    ? {...item, qty: item.qty - 1} 
    : item);
}
/* ===Clearing item logic:===================================================================== */
const clearFunc = (cartItems, itemToClear) => {
    return cartItems.filter(item => item.id !== itemToClear.id);
}
/* ======================================================================0 */
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
})


export const CartProvider = ({children}) =>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setTotal] = useState(0);
/* Item Quantity============================================================ */
    useEffect(() => {
        const newCartCount = cartItems.reduce((currTotal, currCartItem) => 
            currTotal + currCartItem.qty, 0)
        setCartCount(newCartCount);
    }, [cartItems]) ;

/* Cart Total:=============================================================== */
    useEffect(() => {
        const newTotal = cartItems.reduce((currTotal, currCartItem) => 
            (currTotal + currCartItem.qty) * currCartItem.price, 0)
        setTotal(newTotal);
    }, [cartItems]) 
/* ========================================================================= */

    const addItemToCart = (productToAdd) => {
        setCartItems(addFunc(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartItemToRem) => {
        setCartItems(removeFunc(cartItems, cartItemToRem));
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearFunc(cartItems, cartItemToClear));
    }

    const value = {
        isCartOpen,
        setIsCartOpen, 
        addItemToCart, 
        cartItems, 
        cartCount, 
        removeItemFromCart, 
        clearItemFromCart, 
        cartTotal
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}