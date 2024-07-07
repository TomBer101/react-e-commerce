import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Product from '../../components/admin/products/Product';
import { Button, List, ListItem, Box } from '@mui/material';
import { getDoc } from 'firebase/firestore';
// import { combineProductData } from '../../services/productsService';


function Products() {

    const products = useSelector(state => state.products.products)

    return (
        <Box className='products-page'>
                <Typography fontWeight='400' align='justify' variant='h4' >Products</Typography>


            <Box display='flex' gap='2%'>
                <Box >
                <List sx={{ overflowY: 'scroll', height: '65vh' }}>
                    {
                        products.map(product => (
                            <ListItem key={product.id} sx={{}}>
                                <Product
                                    {...product}
                                />
                            </ListItem>
                        ))
                    }
                </List>
                <Button variant='contained' size='small'>Add</Button>
                </Box>
                
                    <Product />
                
                
            </Box>

        </Box>
    );
}

export default Products;