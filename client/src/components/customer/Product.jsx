import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Paper, Box } from '@mui/material';

import { getAllPurchasesByProduct } from '../../redux/selectors/purchases';

import '../../styles/customer/product.css'

const Product = ({title, price, description, category, imgLink, id}) => {
    const categories = useSelector(state => state.categories.categories);
    const productPurchases = useSelector(state => getAllPurchasesByProduct(state, id));

    const [orderAmount, setOrderAmount] = useState(0);


    return (
        <Box>
            <Paper sx={{p: '1rem'}}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p>Prics: ${price}</p>
                        <p>In stock: {}</p>
                        <Box className='order-amount'>
                            <button >-</button>
                            <p style={{display:'inline', margin: '0 1rem'}}>{orderAmount}</p>
                            <button>+</button>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <img width='100%' src={imgLink} />
                    </Grid>
                    <Grid item xs={2} display='flex' alignItems='center'>
                        <p>Bought: {productPurchases.length}</p>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default Product;