import {ADD_PRODUCT, REMOVE_PRODUCT, DELETE_PRODUCT} from '../actions/customer/cartActions';

const initState = {
    cart: [],
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:{
            const newCart = [...state.cart];
            const index = newCart.indexOf(elem => elem.productId === action.payload);

            if (index === -1) {
                newCart = [...newCart, {productId, quntity: 1}]
            } else {
                newCart[index].quantity ++;
            }

            return {
                ...state,
                cart: newCart
            }
            break
        }
        case REMOVE_PRODUCT: {
            const newCart = [...state.cart];
            const index = newCart.indexOf(elem => elem.productId === action.payload);

            if(newCart[index].quantity === 1) {
                newCart = newCart.filter(elem => elem.productId !== action.payload)
            } else {
                newCart[index].quantity--;
            }

            return {
                ...state,
                cart: newCart
            }
            break;
        }
        case DELETE_PRODUCT: {
            const newCart = state.cart.filter(elem => elem.productId !== action.payload);
            return {
                ...state,
                cart: newCart
            }
            break
        }
        default:
            return state
    }
}

export default cartReducer;