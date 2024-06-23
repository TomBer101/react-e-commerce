import { Box, Container, Divider, List, ListItem } from '@mui/material';
import React, { useEffect, useState, useMemo } from 'react';
import FilterBar from '../../components/customer/FilterBar';
import { useSelector } from 'react-redux';
import Product from '../../components/customer/Product';

const ProductsPage = () => {

    const products = useSelector(state => state.products.products);
    const [productsDisplay, setProductsDisplay] = useState(products);

    const maxPrice = useMemo(() => {
        console.log(products);
        return products.length > 0 ? Math.max(...products.map(product => product.price)) : 0;
    }, [products]);

    const [filterTerms, setFilterTerms] = useState({
        title: '',
        category: '',
        price: maxPrice,
    })


    const handleFilterChange = event => {
        const {name, value} = event.target;
        console.log(`name: ${name}, value: ${value}`);
        setFilterTerms({
            ...filterTerms,
            [name]: value
        })
    }

    useEffect(() => {
        console.log('products: ', productsDisplay);
    }, [productsDisplay])

    useEffect(() => {
        var filteredProducts = products.filter(product => product.title.toLowerCase().includes(filterTerms.title.toLowerCase())).filter(prod => prod.price <= filterTerms.price)
        if (filterTerms.category !== '') {
            filteredProducts = filteredProducts.filter(prod => prod.category.id === filterTerms.category)
        }
        
                                     
        console.log(filteredProducts);
        setProductsDisplay(filteredProducts)
        console.log('products collection: ', products);
    }, [products, filterTerms])

    //TODO: create a list component.
    return (
        <Container sx={{p:0}}>
            <FilterBar onFilterChange={handleFilterChange} values={filterTerms} maxPrice={maxPrice}/>
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