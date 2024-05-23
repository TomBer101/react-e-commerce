import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import  Typography  from '@mui/material/Typography';
import Product from '../../components/admin/Product';
import { List, ListItem } from '@mui/material';
import { getDoc } from 'firebase/firestore';


function Products() {

    const products = useSelector(state => state.products.products)
    console.log(products);

    useEffect(() => {
        // Loop through products and fetch category data for each (assuming category IDs)
        products.forEach(async (product) => {
          const categoryRef = product.category; // Access the _DocumentReference
          const docSnapshot = await getDoc(categoryRef);
    
          if (docSnapshot.exists) {
            const fetchedCategoryData = docSnapshot.data();
            setCategoryData(prevData => ({ ...prevData, [product.id]: fetchedCategoryData })); // Store data with product ID as key
          } else {
            console.log("Category document not found:", product.id);
            // Handle cases where category document is missing
          }
        });
      }, [products]); // Re-run useEffect when products change

    return (
        <div className='products-page'>
            <Typography fontWeight='400' align='justify' variant='h2'>Products</Typography>
            <List sx={{overflowY : 'scroll', height : '65vh'}}>
                {
                    products.map(product => (
                        <ListItem key={product.id} sx={{}}>
                            <Product 
                                category={product.category}
                                description={product.description}
                                id={product.id}
                                imgLink={product.imgLink}
                                price={product.price}
                                title={product.title}
                            />
                        </ListItem>
                    ))
                }
            </List>
        </div>
    );
}

export default Products;