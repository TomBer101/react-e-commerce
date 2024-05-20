import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, FormControl, Grid, InputBase, InputLabel, Select, TextareaAutosize, Typography } from '@mui/material';
import TextField from '@mui/material/TextField'

import Table from '../common/Table';

const Product = ({ title, description, price, category, imgLink, id }) => {

    const categories = useSelector(state => state.categories.categories);
    const purchases = useSelector(state => state.purchases.purchases);

    console.log('categories: ', categories, 'purchases: ', purchases);

    const [productInput, setProductInput] = useState({
        title: title,
        description: description,
        price: price,
        category: category,
        imgLink: imgLink
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setProductInput({
            ...productInput,
            [name]: value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (event.target.checkValidity()) {
          alert("Form is valid! Submitting the form...");
        } else {
          alert("Form is invalid! Please check the fields...");
        }
    };

    // data manipulation => combine each product with purchases

    return (
        <Box sx={{ width : '65%'}}>
            <Paper component='form' elevation={5} sx={{p : '2%', borderRadius : '12px'}} onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={6} >
                        <TextField
                            label="Title"
                            name='title'
                            value={productInput.title}
                            onChange={handleInputChange}
                            variant="outlined"
                            fullWidth
                            size='small'
                            sx={{mb : '1rem'}}
                        />
                        <FormControl sx={{width : '100%', flexDirection : 'row'}}>
                            <InputLabel  id={`${id}-category-label`}>category</InputLabel>
                            <Select
                                //labelId={`${id}-category-label`}
                                id={`${id}-category`}
                                value={productInput.category}
                                onChange={handleInputChange}
                                size='small'
                                sx={{mb : '5%', flex : '1'}}
                            />
                        </FormControl>
                        <TextField 
                            multiline  
                            fullWidth 
                            rows={5} 
                            label='Description'
                            name='description'
                            value={productInput.description}
                            variant='outlined'
                            onChange={handleInputChange}
                        />
                        <Button type='submit' size='small' variant='contained' color='success' sx={{mt : '5%'}}>Save!</Button>
                    </Grid>
                    <Grid item xs={6} >
                    <TextField
                            label="Price"
                            name='price'
                            value={productInput.price}
                            onChange={handleInputChange}
                            variant="outlined"
                            fullWidth
                            size='small'
                            sx={{mb : '5%'}}
                            inputProps={{
                                pattern: "[0-9]",
                            }}
                        />
                        <TextField 
                            label='Link to pic:'
                            value={productInput.imgLink}
                            onChange={handleInputChange}
                            name='imgLink'
                            variant='outlined'
                            fullWidth
                            size='small'
                            sx={{mb : '5%'}}
                        />
                        <Box maxHeight={'23vh'} overflow={'hidden'}>
                            <Typography variant='h6' fontSize={'1rem'}>Bought by:</Typography>
                            < Table  />
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default Product;