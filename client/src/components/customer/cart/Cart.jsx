import { Box, ListItem, List } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {

    // cart = {cart, total}
    const cart = useSelector(state => state.shoppingCart) // TODO: change to combined selctor of cart-prod price + add total price
    const products = useSelector(state => state.products.products)
    const handleOrder = () => {

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
                <Box display='flex' gap='2%'>
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