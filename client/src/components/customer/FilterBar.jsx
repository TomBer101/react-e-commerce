import { Box, FormControl, InputLabel, MenuItem, Select, Slider, Stack, TextField } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const FilterBar = ({onFilterChange, maxPrice}) => {

    const categories = useSelector(state => state.categories.categories);

    return (
        <Stack direction='row' spacing={2}>
            <p>Filter By: </p>
            <FormControl sx={{ width: '100%', flexDirection: 'row' }}>
                <InputLabel>Category</InputLabel>
                <Select
                    //labelId={`${id}-category-label`}
                    id={`${id}-category`}
                    value={productInput.category}
                    onChange={e => onFilterChange(e)}
                    name='category'
                    size='small'
                    sx={{ mb: '5%', flex: '1' }}
                >
                    <MenuItem key='default' value={''}>All</MenuItem>
                    {
                        categories.map(category => (
                            <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <FormControl sx={{ width: '100%', flexDirection: 'row' }}>
                <InputLabel>Price</InputLabel>
                <Slider
                    max={maxPrice}
                    name='price'
                    onChange={e => onFilterChange(e)}
                />
            </FormControl>
            <FormControl sx={{ width: '100%', flexDirection: 'row' }}>
                <InputLabel>Title</InputLabel>
                <TextField />
            </FormControl>
        </Stack>
    );
};

export default FilterBar;