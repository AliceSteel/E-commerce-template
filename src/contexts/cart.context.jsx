import { createContext, useReducer } from "react";
import { createAction } from "../utilities/reducer/reducer.utils";

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
});

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
};

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const cartReducer = (state, action) => {
    const {type, payload } = action;

    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            };

        default: 
            throw new Error(`unhandled type of ${type} in cartReducer`)
    }
}


export const CartProvider = ({children}) =>{

    const [{cartItems, isCartOpen, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => 
                            total + cartItem.qty, 0);

        const newCartTotal = newCartItems.reduce((total, cartItem) => 
                            total + cartItem.qty * cartItem.price, 0);

        //dispatch new action with payload= {newCartItems, newCartTotal, newCount}:

        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS,  {
                cartItems: newCartItems,
                cartTotal: newCartTotal,
                cartCount: newCartCount }))
                  
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addFunc(cartItems, productToAdd);
        updateCartReducer(newCartItems);
    }

    const removeItemFromCart = (cartItemToRem) => {
        const newCartItems = removeFunc(cartItems, cartItemToRem);
        updateCartReducer(newCartItems);
    }

    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = clearFunc(cartItems, cartItemToClear);
        updateCartReducer(newCartItems);
    };

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool ))
    };

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