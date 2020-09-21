interface cartType {
    id: number,
    name: string,
    price: number,
    image: string
}

const CartReducer = ((state: any, action: any) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [action.payload, ...state.cartItems]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter((cartItems: cartType) => cartItems.id !== action.payload)
            }
        default:
            return state;
    }
})

export default CartReducer;