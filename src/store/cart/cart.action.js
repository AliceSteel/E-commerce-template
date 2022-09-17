import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utilities/reducer/reducer.utils";

const addFunc = (cartItems, productToAdd) => {     //find if product is new to cart:
    const findItem = cartItems.find(el => el.id===productToAdd.id);

    if( findItem ){                               //if not found then res is true
       return cartItems.map((item) => 
                    (item.id===productToAdd.id) ? {...item, qty: item.qty + 1} 
                    : item);

    }                                           //if product exists in cart, increment qty:
    return [...cartItems,{...productToAdd, qty: 1}];   
}

/* REMOVING 1 item LOGIC=============================================================== */
const removeFunc = (cartItems, productToRem) => {   //find the item in the cart to remove:
    const findItem = cartItems.find(el => el.id===productToRem.id);

    //check if qty is equal to 1, so we can remove the whole product from cart:
    if(findItem.qty === 1){
        return cartItems.filter(item => item.id !== productToRem.id);//returns new array without item
    }                   //otherwise we decrease it by 1:
    return cartItems.map((item) => 
    (item.id===productToRem.id)
    ? {...item, qty: item.qty - 1} 
    : item);
}

/* ===Clearing item logic:===================================================================== */
const clearFunc = (cartItems, itemToClear) => {
    return cartItems.filter(item => item.id !== itemToClear.id);
}
/* =================================================================== */


export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
        const newCartItems = addFunc(cartItems, productToAdd);
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    }

export const removeItemFromCart = (cartItems, cartItemToRem) => {
        const newCartItems = removeFunc(cartItems, cartItemToRem);
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    }

export const clearItemFromCart = (cartItems, cartItemToClear) => {
        const newCartItems = clearFunc(cartItems, cartItemToClear);
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    };
