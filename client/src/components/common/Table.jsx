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

// const GenericTable = ({ data }) => {

//      const [objectKeys, setObjectKeys] = useState([])

//     useEffect(() => {
//         if (data.length > 0) {
//             console.log(data);
//             setObjectKeys(Object.keys(data[0]))
//         }
//     }, [data])


//     if (!data || data.length === 0 || data === undefined) {
//         return null; // Return early if data is null or empty
//     }


//     return (
//         // <div>OK</div>
//         <TableContainer >
//             <Table>
//                 <TableHead>
//                     <TableRow>
//                         {objectKeys.map(objectKey => (
//                             <TableCell align='center' key={objectKey}>
//                                 {objectKey}
//                             </TableCell>
//                         ))}
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                 {data && data.map(entity => (
//         <TableRow key={entity.id}>
//             {objectKeys.map(objectKey => (
//                 <TableCell key={entity.id + objectKey}>
//                     {
//                     Array.isArray(entity[objectKey]) ? (
//                         <Table data={entity[objectKey]} />
//                     ) : (
//                         entity[objectKey]
//                     )
//                     }
//                 </TableCell>
//             ))}
//         </TableRow>
//     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// };

// export default GenericTable;
