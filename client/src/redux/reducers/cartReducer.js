import {ADD_PRODUCT, REMOVE_PRODUCT, DELETE_PRODUCT} from '../actions/customer/cartActions';

const initState = {
    cart: [],
    total: 0
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:{
            let price;
            const newCart = [...state.cart];
            const index = newCart.indexOf(elem => elem.productId === action.payload.productId);

            if (index === -1) {
                price = action.payload.productPrice
                newCart = [...newCart, {
                    productId, 
                    quntity: 1, 
                    price: price
                }]; 
            } else {
                newCart[index].quantity ++;
                price = newCart[index].price
            }

            return {
                ...state,
                cart: newCart,
                total: state.total + price
            }
        }
        case REMOVE_PRODUCT: {
            const newCart = [...state.cart];
            const index = newCart.indexOf(elem => elem.productId === action.payload);
            const price = newCart[index].price;

            if(newCart[index].quantity === 1) {
                newCart = newCart.filter(elem => elem.productId !== action.payload)
            } else {
                newCart[index].quantity--;
            }

            return {
                ...state,
                cart: newCart,
                total: state.total - price
            }
        }
        case DELETE_PRODUCT: {
            const removedItem = state.cart.find(item => item.productId === action.payload);

            if (!removedItem) {
              return state;
            }
            
            const newCart = state.cart.filter(item => item.productId !== action.payload);
            const totalPriceReduction = removedItem.quantity * removedItem.price;
            
            return {
              ...state,
              cart: newCart,
              total: state.total - totalPriceReduction,
            };
        }
        default:
            return state
    }
}

export default cartReducer;