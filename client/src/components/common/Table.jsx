import React from 'react';

import Paper  from '@mui/material/Paper';
import  TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableBody, TableCell } from '@mui/material';

const Table = ({data}) => {

    const objectKeys = Object.keys(data[0]); // TODO : Error handling....
    
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                    {
                        objectKeys.map(objectKey => {
                            return <TableCell align='center' key={objectKey}>{objectKey}</TableCell>
                        })
                    }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map(entity => {
                            return <TableRow key={entity.id}>
                                {
                                    objectKeys.forEach(objectKey => {
                                        return (
                                            <TableCell key={entity.id + objectKey}>{entity[objectKey]}</TableCell>
                                        )
                                    })
                                }
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Table;