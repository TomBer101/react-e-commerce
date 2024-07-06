import { Box, ListItem, List } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from './CartItem';
import { useAuth } from '../../../contexts/AuthContext';
import { purchaseRequest, purchaseFailure, purchaseSuccess } from '../../../redux/actions/customer/cartActions';
import { submitPurchase } from '../../../services/purchasesService';


const Cart = () => {

    // cart = {cart, total}
    const cart = useSelector(state => state.shoppingCart) // TODO: change to combined selctor of cart-prod price + add total price
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch();
    const {currentUser} = useAuth();


    const handleOrder = async () => {
        const {userName, shareData} = currentUser;
        try {
            dispatch(purchaseRequest({userName, shareData}))

            const res = await submitPurchase(userName, shareData, cart.cart);

            dispatch(purchaseSuccess(res))
        } catch (err) {
            dispatch(purchaseFailure(err))
            console.error(`Error ordering products failed. Error: `, err);
        }
    };

    console.log(cart);

    // TODO: optimize list rendreing + item rendering
    return (
            <Box sx={{
                display: 'grid',
                width: '28vw',
                height: '100%',
                gridTemplateRows:'0.1fr 2fr 0.1fr'
            }} >
                <h4>Shopping Cart</h4>
                <Box display='flex' gap='2%' maxHeight='52vh'>
                    <List sx={{ overflowY: 'scroll'}}>
                        {
                            cart.cart.map(product => {
                                const prod = products.find(p => p.id === product.productId);
                                const combined = {
                                    ...product,
                                    productName: prod.title
                                }

                                return (
                                    <ListItem key={combined.id}>
                                        <CartItem {...combined} />
                                    </ListItem>
                                )
                            }
                            )
                        }
                    </List>
                </Box>
                <div className="footer">
                    <h6>Total: ${cart.total}</h6>
                    <button onClick={handleOrder}>
                        Order
                    </button>
                </div>
            </Box>
    );
};

export default Cart;