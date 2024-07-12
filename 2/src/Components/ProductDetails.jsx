
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductDetails = ({ product }) => {
  if (!product) return <div>Loading...</div>;

  return (
    <Card style={{ margin: '20px' }}>
      <CardContent>
        <Typography variant="h5">{product.productName}</Typography>
        <Typography variant="body1">Company: {product.company}</Typography>
        <Typography variant="body1">Category: {product.category}</Typography>
        <Typography variant="body1">Price: ${product.price}</Typography>
        <Typography variant="body1">Rating: {product.rating} / 5</Typography>
        <Typography variant="body1">Discount: {product.discount}%</Typography>
        <Typography variant="body1">Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;