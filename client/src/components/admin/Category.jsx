import { Button, Paper, Typography } from '@mui/material';
import React from 'react';

import '../../styles/admin/category.css'

const Category = ({title}) => {
    return (
       <Paper sx={{
                width : '92%', 
                padding : '10px', 
                margin : '18px auto', 
                textAlign : 'justify',
                display : 'flex',
                justifyContent : 'space-between'
                }}>
            <Typography fontWeight={'600'} size='small' variant='h5' >{title}</Typography>
            <div className="buttons-group">
                <Button size='small' variant='contained'>Update</Button>
                <Button size='small' variant='contained'>Remove</Button>
            </div>
       </Paper>
    );
};

export default Category;

