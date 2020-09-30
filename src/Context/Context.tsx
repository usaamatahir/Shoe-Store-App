import React, { createContext, useReducer } from "react";
import CartReducer from './Reducer';

interface cartType {
    id: number,
    name: string,
    price: number,
    image: string
}

const initialState = {
    cartItems: [],
    addToCart: ({ id, name, price, image }: cartType) => {},
    removeFromCart: (id: number) => {},
}


export const CartContext = createContext(initialState);


export const ContextProvider = ({ children }: any) => {
    let [state, dispatch] = useReducer(CartReducer, initialState);

    function addToCart(cartObj: cartType) {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id: cartObj.id,
                name: cartObj.name,
                price: cartObj.price,
                image: cartObj.image
            },
        });
    }


    function removeFromCart(id: number) {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id
        })
    }

    return (
        <CartContext.Provider value={{
            cartItems: state.cartItems,
            addToCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}