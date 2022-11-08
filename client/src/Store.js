import {createContext, useReducer} from 'react';


export const Store = createContext();

const initialState = {
    cart: {
        //if there are items in the local store, use them as an initial state, otherwise set it as empty
        //this condition prevents the cart to become empty when we refresh the page 
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    },
};

function reducer(state, action) {
    switch(action.type){
        case "CART_ADD_ITEM":
            //add to cart
            const newItem = action.payload;
            //checking if newItem is already in the cart
            const existItem = state.cart.cartItems.find(
                (item) => item.id === newItem.id
            );
            
            //if the item is already in the cart, update the current item with the new item, 
            //otherwise keep the item in the cart by adding it at the end of cartItems
            const cartItems = existItem 
            ? state.cart.cartItems.map((item) => 
            item.name === existItem.name ? newItem : item
            ) 
            : [...state.cart.cartItems, newItem];
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            return{...state, cart: {...state.cart, cartItems}};

            case 'CART_REMOVE_ITEM':{
                const cartItems = state.cart.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );
                localStorage.setItem('cartItems', JSON.stringify(cartItems));

                return {...state, cart: {...state.cart, cartItems}};
            };

            case 'EMPTY_CART': {
                const cartItems= [];
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                return {...state, cart: {...state.cart, cartItems}};
            }

        default:
            return state;
    }
};

export function StoreProvider(props){
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}

