import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, deleteProduct, removeProduct } from '../../../redux/actions/customer/cartActions'

import '../../../styles/customer/cartItem.css'

const CartItem = ({ quantity, price, productId, productName}) => {
    console.log(`cart item data:
        id: ${productId}
        quantity: ${quantity}
        price: ${price}
        `);
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
                <button onClick={handleRemoveProduct}> - </button>
                <p>{quantity}</p>
                <button onClick={handleAddProduct}> + </button>
                <p>units</p>
            </div>
            <p>- Total: ${quantity * price}</p>
            <button onClick={handleDeleteProdyc}> X </button>
        </div>
    );
};

export default CartItem;