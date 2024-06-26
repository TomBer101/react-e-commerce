import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Product from '../../components/admin/products/Product';
import { Button, List, ListItem, Box } from '@mui/material';
import { getDoc } from 'firebase/firestore';
// import { combineProductData } from '../../services/productsService';


function Products() {

    const products = useSelector(state => state.products.products)
    console.log(products);


    // useEffect(() => {
    //     // Loop through products and fetch category data for each (assuming category IDs)
    //     products.forEach(async (product) => {
    //       const categoryRef = product.category; // Access the _DocumentReference
    //       const docSnapshot = await getDoc(categoryRef);

    //       if (docSnapshot.exists) {
    //         const fetchedCategoryData = docSnapshot.data();
    //         setCategoryData(prevData => ({ ...prevData, [product.id]: fetchedCategoryData })); // Store data with product ID as key
    //       } else {
    //         console.log("Category document not found:", product.id);
    //         // Handle cases where category document is missing
    //       }
    //     });
    //   }, [products]); // Re-run useEffect when products change

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