import { Button, OutlinedInput, Paper, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';

import { updateCategory, removeCategory } from '../../services/categoriesService';

import '../../styles/admin/category.css'

const Category = ({title, id}) => {
    const [inUpdate, setInUpdate] = useState(false)
    const inputRef = useRef(null);
console.log((id));
    const handleUpgradeClick = async () => {
        if (!inUpdate) {
            setInUpdate(true)
        } else {
            console.log(inputRef.current.value);
            try {
                await updateCategory(id, inputRef.current.value);
                setInUpdate(!inUpdate)
            } catch (err) {
                console.error('Error updating category: ', err);
            }
            
        }
    }

    const handleremoveClick = async () => {
        if (inUpdate) {
            setInUpdate(false)
        } else {
            try {
                await removeCategory(id);
            } catch (err) {
                console.error('Error deleting a category: ', id);
            }
        }
    }

    return (
       <Paper sx={{
                width : '92%', 
                padding : '10px', 
                margin : '18px auto', 
                textAlign : 'justify',
                display : 'flex',
                justifyContent : 'space-between'
                }}>
            {   inUpdate ? 
                <OutlinedInput size='small' inputRef={inputRef} defaultValue={title} sx={{
                    width : '60%'
                }}/> :
                <Typography fontWeight={'600'} size='small' variant='h5' >{title}</Typography>
            }
            <div className="buttons-group">
                <Button onClick={handleUpgradeClick} size='small' variant='contained'>{inUpdate ? 'OK' : 'Update'}</Button>
                <Button onClick={handleremoveClick} size='small' variant='contained'>{inUpdate ? 'Cancel' : 'Remove'}</Button>
            </div>
       </Paper>
    );
};

export default Category;

