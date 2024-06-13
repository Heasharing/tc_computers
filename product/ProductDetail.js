// src/ProductDetail.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const ProductDetail = ({ product, open, onClose }) => {
  if (!product) {
    return null
    
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{product.name}</DialogTitle>
      <DialogContent>
        <p>Price: ${product.price}</p>
        {product.discount && <p>Discount: ${product.discountAmount}</p>}
        <p>{product.description}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDetail;
