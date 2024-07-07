import { Box, Button, FormControl, InputLabel, MenuItem, Select, Slider, Stack, TextField } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import '../../styles/customer/filterbar.css';

// TODO: test filter bar
const FilterBar = ({onFilterChange, values, maxPrice}) => {

    const categories = useSelector(state => state.categories.categories);
    console.log(`max prics = ${maxPrice}`);
    return (
        <div className='filter-bar'>
            <p>Filter By: </p>
            <FormControl sx={{ width: '100%', flexDirection: 'row' }}>
                <InputLabel>Category</InputLabel>
                <Select
                    //labelId={`${id}-category-label`}
                    id={`category`}
                    value={values.category}
                    onChange={e => { onFilterChange(e)}}
                    name='category'
                    size='small'
                    sx={{  flex: '1' }}
                >
                    <MenuItem key='default' value={''}>All</MenuItem>
                    {
                        categories.map(category => (
                            <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <FormControl sx={{ width: '100%', flexDirection: 'row', gap:'1rem' }}>
                <InputLabel>Price</InputLabel>
                <Slider
                    max={maxPrice}
                    name='price'
                    onChange={e => onFilterChange(e)}
                    value={values.price}
                />
                {`$${values.price}`}
            </FormControl>
            <FormControl sx={{ width: '100%', flexDirection: 'row' }}>
                
                <TextField label='Title' variant='outlined' size='small' name='title' value={values.title} onChange={e => onFilterChange(e)} fullWidth/>
            </FormControl>
            <Button name='clear' size='small' onClick={e => onFilterChange(e)}>clear</Button>
        </div>
    );
};

export default FilterBar;