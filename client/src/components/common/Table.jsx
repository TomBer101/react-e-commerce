import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableBody, TableCell, Table } from '@mui/material';

const GenericTable = ({ data, columns }) => {
    return(
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map((col, index) => (
                            <TableCell key={index}>{col.header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {columns.map((col, colIndex) => (
                                <TableCell key={colIndex}>
                                    {col.render ? col.render(row[col.accessor]) : row[col.accessor]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default GenericTable;

