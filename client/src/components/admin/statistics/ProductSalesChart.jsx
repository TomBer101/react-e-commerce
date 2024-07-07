import React, {useEffect, useState} from "react";

import {AgChartsReact} from 'ag-charts-react';
import {useSelector} from 'react-redux';
import { Box } from "@mui/material";

const series = [{ type: 'pie', angleKey: 'amount', legendItemKey: 'productName' }];

const ProductSalesChart = () => {
    const [purchsesByProduct, setPurchasesByProduct] = useState({
        data : [],
        series : series,
     
    });

    const products = useSelector(state => state.products.products)
    const purchases = useSelector(state => state.purchases.purchases)

    //Is this calculation better as a useEffect or useMemo? In general how should it be done?
    useEffect(() => {
        const calculatePurchasesByProduct = () => {
            const result = products.map(product => {
                const productPurchses = purchases.filter(purchase => purchase.productId === product.id);
                return {
                    productName : product.title,
                    amount : productPurchses.length
                }
            })

            return result;
        }

        if(products.length > 0 && purchases.length > 0) {
            setPurchasesByProduct({
                ...purchsesByProduct,
                data : calculatePurchasesByProduct()
            });
        }
    }, [products,purchases]);

    return (
        <Box height='68vh' width='75%' margin='0 auto' >
<AgChartsReact options={purchsesByProduct}/>
        </Box>
            

        
    )
}

export default ProductSalesChart;
