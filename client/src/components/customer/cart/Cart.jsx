import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [total, setTotal] = useState(0)

    // cart = {cart, total}
    const cart = useSelector(state => state.shoppingCart) // TODO: change to combined selctor of cart-prod price + add total price
    const products = useSelector(state => state.products.products)

    const handleOrder = () => {

    };

    // TODO: optimize list rendreing + item rendering
    return (
        <Box>
            <h2>Shopping Cart</h2>
            <Box display='flex' gap='2%'>
                <List sx={{ overflowY: 'scroll', height: '65vh', width: '60%', margin: 'auto' }}>
                    {
                        cart.cart.map(product =>{
                            const prod = products.find(p => p.id === product.productId);
                            const combined = {
                                ...product,
                                productName: prod.title
                            }
                        return (
                        <ListItem key={product.id}>
                            <CartItem {...combined}/>
                        </ListItem>
                        )
                        }
                        )
                    }
                </List>
            </Box>
            <h6>Total: ${total}</h6>
            <button onClick={handleOrder}>
                Order
            </button>
        </Box>
    );
};

export default Cart;