import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, deleteProduct, removeProduct } from '../../../redux/actions/customer/cartActions'

const CartItem = ({ qty, price, productId, productName}) => {

    const dispatch = useDispatch();

    // TODO: extract and re-use in prodct as well
    const handleAddProduct = () => {
        dispatch(addProduct(productId))
    }

    const handleRemoveProduct = () => {
        dispatch(removeProduct(productId))
    }

    const handleDeleteProdyc = () => {
        dispatch(deleteProduct(productId))
    }

    return (
        <div className='cart-item'>
            <p>{productName}</p>
            <div className="buttons-container">
                <button> - </button>
                {qty}
                <button> + </button>
                <p>units</p>
            </div>
            <p>- Total: ${qty + price}</p>
            <button> X </button>
        </div>
    );
};

export default CartItem;