import React, { useEffect, useRef, useState } from 'react';
import { addCategory, getAllCategories } from '../../services/categoriesService';
import { Box, Typography, Paper, OutlinedInput, Button } from '@mui/material';

import Category from '../../components/admin/Category';
import '../../styles/admin/categoriesPage.css'
import { useSelector } from 'react-redux';
import   GenericTable from '../../components/common/Table';
 '../../components/common/Table';

function Categories() {
    //const [categories, setCategories] = useState([]);
    const categories = useSelector(state => state.categories.categories)
    const formRef = useRef(null);

    // useEffect(() => {
    //     getAllCategories(setCategories);
    // }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('here');
        const data = new FormData(event.currentTarget);
        const newCategory = {
            id : data.get('categoryName'),
            name : data.get('categoryName'),
        }

        addCategory((res) => {
            if (!res.success) { 
                console.log(`Ooops... ${res.error}`)
            } else {
                formRef.current.reset();
            }
        }, newCategory)
    }

    return (
        <div className='categories'>
            <Typography fontWeight='400' align='justify' variant='h2'>Categories</Typography>
            <Paper sx={{
                backgroundColor: '#eeeeee',
                padding: '8px',
                maxWidth: '38%',
                minWidth: '70%'
            }}>
                <div className="categories-list">
                    {
                        categories.map(category => { return <Category key={category.id} title={category.name} id={category.id}/> })
                    }
                </div>

                <Box component='form' ref={formRef} onSubmit={handleSubmit} sx={{
                    display: 'flex',
                    width: '94%',
                    justifyContent: 'space-between',
                    margin: '21px auto'
                }}>
                    <OutlinedInput size='small' name='categoryName' id='categoryName' placeholder='Add new category' sx={{
                        backgroundColor: 'white',
                        width: '82%'
                    }} />
                    <Button type='submit' size='small' variant='contained' color='success'>Add</Button>
                </Box>
            </Paper>
        </div>
    );
}

export default Categories;