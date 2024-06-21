import { Box, Container, Divider, List, ListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FilterBar from '../../components/customer/FilterBar';
import { useSelector } from 'react-redux';
import Product from '../../components/customer/Product';

const ProductsPage = () => {

    const products = useSelector(state => state.products.products);

    const [productsDisplay, setProductsDisplay] = useState(products);
    const [filterTerms, setFilterTerms] = useState({
        title: '',
        category: '',
        price: Infinity,
    })


    const handleFilterChange = event => {
        const {name, value} = event;
        setFilterTerms({
            ...filterTerms,
            [name]: value
        })
    }
    useEffect(() => {
        console.log('products: ', productsDisplay);
    }, [productsDisplay])

    useEffect(() => {
        const filteredProducts = products.filter(product => product.title.includes(filterTerms.title))
                                        .filter(product => product.price < filterTerms.price)
                                        .filter(product => {
                                            return filterTerms.category? product.category === filterTerms.category : true
                                        })
                                        console.log(filteredProducts);
        setProductsDisplay(filteredProducts)
        
    }, [products, filterTerms])

    //TODO: create a list component.
    return (
        <Container>
            <FilterBar onFilterChange={handleFilterChange}/>
            <Divider />
            <Box display='flex' gap='2%'>
                <List sx={{overflowY: 'scroll', height: '65vh', width: '60%', margin: 'auto'}}>
                    {
                       
                        productsDisplay.map(product => 
                           ( <ListItem key={product.id}>
                                <Product {...product}/>
                            </ListItem>)
                        )
                    }
                </List>
            </Box>
        </Container>
    );
};

export default ProductsPage;