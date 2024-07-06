import { Box, Collapse, Container, Divider, IconButton, List, ListItem } from '@mui/material';
import React, { useEffect, useState, useMemo } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FilterBar from '../../components/customer/FilterBar';
import { useSelector } from 'react-redux';
import Product from '../../components/customer/Product';
import Cart from '../../components/customer/cart/Cart';

const ProductsPage = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const products = useSelector(state => state.products.products);
    const [productsDisplay, setProductsDisplay] = useState(products);

    const maxPrice = useMemo(() => {
        console.log('catalog: ', products);
        return products.length > 0 ? Math.max(...products.map(product => product.price)) : 0;
    }, [products]);

    const [filterTerms, setFilterTerms] = useState({
        title: '',
        category: '',
        price: maxPrice,
    })

    const handleFilterChange = event => {
        const { name, value } = event.target;
        console.log(`name: ${name}, value: ${value}`);
        setFilterTerms({
            ...filterTerms,
            [name]: value
        })
    }

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    }

console.log(productsDisplay);
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
        <Container maxWidth='false' sx={{ p: 0, display: 'flex' }}>
            <Box sx={{ bgcolor: 'gray.200', p: 2, display: 'flex' }}>
                <Collapse in={isCartOpen}  orientation='horizontal' timeout='auto' unmountOnExit sx={{height: '100%'}}>
                    <Cart />
                </Collapse>
                <IconButton sx={{alignSelf: 'center'}} onClick={toggleCart} aria-label='Toggle Cart'>
                    {isCartOpen ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <FilterBar
                    onFilterChange={handleFilterChange}
                    values={filterTerms}
                    maxPrice={maxPrice}
                />
                <Divider />
                <Box display='flex' gap='2%'>
                    <List sx={{ overflowY: 'scroll', height: '65vh', width: '80%', margin: 'auto' }}>
                        {

                            productsDisplay.map(product =>
                            (<ListItem key={product.id}>
                                <Product {...product} />
                            </ListItem>)
                            )
                        }
                    </List>
                </Box>
            </Box>
        </Container>
    );
};

export default ProductsPage;