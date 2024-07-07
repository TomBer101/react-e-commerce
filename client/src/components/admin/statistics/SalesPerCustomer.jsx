import React, {useEffect, useState} from "react";

import {AgChartsReact} from 'ag-charts-react';
import {useSelector} from 'react-redux';

import { combineUserData } from '../../../services/usersService';
import { Select, Typography, Box, MenuItem } from "@mui/material";

//const series = [{ type: 'bar', xKey: 'quarter', yKey: 'iphone', yName: 'iPhone' }];

const SalesPerCustomer = () => {
    // const [pieChartOptions, setPieChartOptions] = useState({    
    //     tooltip : {
    //         enabled : false
    //     },
    //     data:[
    //         {
    //           quarter: "product",
    //           iphone: 140,
    //           mac: 16,
    //           ipad: 14,
    //           wearables: 12,
    //           services: 20,
    //         },
    //       ],
    //     series: [
    //       {
    //         type: "bar",
    //         xKey: "quarter",
    //         yKey: "iphone",
    //         yName: "iPhone",
    //       },
    //       {
    //         type: "bar",
    //         xKey: "quarter",
    //         yKey: "mac",
    //         yName: "Mac",
    //       },
    //       {
    //         type: "bar",
    //         xKey: "quarter",
    //         yKey: "ipad",
    //         yName: "iPad",
    //       },
    //       {
    //         type: "bar",
    //         xKey: "quarter",
    //         yKey: "wearables",
    //         yName: "Wearables",
    //       },
    //       {
    //         type: "bar",
    //         xKey: "quarter",
    //         yKey: "services",
    //         yName: "Services",
    //       },
    //     ],
    //   });

    const [pieChartOptions, setPieChartOptions] = useState({});
    const [userForfilter, setUserForFilter] = useState('')
    const [usersCombinedData, setUsersCombinedData] = useState([])

    const users = useSelector(state => state.users.users)
    const purchases = useSelector(state => state.purchases.purchases);
    const products = useSelector(state => state.products.products)

    console.log('Products', products.map(p => p.title));

    //Is this calculation better as a useEffect or useMemo? In general how should it be done?
    useEffect(() => {

        if (users.length > 0 && purchases.length > 0 && products.length > 0) {

            const series = products.map(product => {
                return {
                    type : 'bar',
                    xKey : 'xAxisName',
                    yKey : product.title,
                    yName : product.title
                }
            })

            const chartData = {xAxisName : 'product'};
            products.forEach(prod => {
                chartData[prod.title] = 0;
            })

            setPieChartOptions({
                ...pieChartOptions,
                series : series,
                data : [chartData]
            })

            const usersData = combineUserData(users, purchases, products);
            console.log(`Users data: `, usersData);
            setUsersCombinedData(usersData);

            
            // setPieChartOptions({
            //     ...pieChartOptions,
            //     data : usersData
            // });
        }
    }, [users, purchases, products]);

    //TODO: Fix an error, each product that exists and the user didnt purchase - should be set to 0 + yAxis natural numbers
    useEffect(() => {
        const getPieChartData = () => {
            const userData = usersCombinedData.find(user => user.userName === userForfilter);
            const pieData = {xAxisName : 'product'};

            userData.purchases.forEach(purchase => {
                pieData[purchase.productName] = purchase.quantity
            })

            console.log('chart data:', pieChartOptions.data);
            console.log('chart data extra obj:', pieData);

            setPieChartOptions({
                ...pieChartOptions,
                data : [pieData]
            })

            console.log(pieChartOptions.data);
        }

        if (usersCombinedData && userForfilter) {
            getPieChartData();
        }
    }, [userForfilter, usersCombinedData]);

    const handleChoosinfUser = event => {
        const {value} = event.target;
        setUserForFilter(value);
    }

    return (
        <Box height='90vh'>
            <Typography variant="h5">Products Quantity Per Customer</Typography>
            <Typography margin='0 2rem' variant="caption">Sort by Customer</Typography>
            <Select
                sx={{width: '10%'}}
                id='current-user-purchases'
                onChange={handleChoosinfUser}
                size="small"
                value={userForfilter}
            >
                {
                    users.map(user => (
                        <MenuItem key={user.userName} value={user.userName}>
                            {user.userName}
                        </MenuItem>
                    ))
                }
            </Select>
            <Box height='75%' width='75%' margin='2% auto' >
            <AgChartsReact options={pieChartOptions}/>

            </Box>
        </Box>
    )
}

export default SalesPerCustomer;
