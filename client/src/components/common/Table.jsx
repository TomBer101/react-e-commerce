import React from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableBody, TableCell } from '@mui/material';

const Table = ({ data }) => {

    console.log(data);

    if (!data || data.length === 0 || data === undefined) {
        return null; // Return early if data is null or empty
    }

    const objectKeys = Object.keys(data[0]);
    console.log('object keys: ', objectKeys);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {objectKeys.map(objectKey => (
                            <TableCell align='center' key={objectKey}>
                                {objectKey}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.map(entity => (
                        <TableRow key={entity.id}>
                            {objectKeys.map(objectKey => (
                                <TableCell key={entity.id + objectKey}>
                                    {
                                    Array.isArray(entity[objectKey]) ? (
                                        <Table data={entity[objectKey]} />
                                    ) : (
                                        entity[objectKey]
                                    )
                                    }
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Table;
