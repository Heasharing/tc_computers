import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ProductDetail from '../product/ProductDetail';

const Search = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchChange = (event, value) => {
    setSearchTerm(value);
    filterProducts(value);
  };

  const filterProducts = (value) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSelect = (event, product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className='search-items'>
      <Autocomplete
        freeSolo
        options={filteredProducts}
        getOptionLabel={(option) => option.name}
        inputValue={searchTerm}
        onInputChange={handleSearchChange}
        onChange={handleSelect}
        renderInput={(params) => (
          <TextField {...params} label="Search products" variant="outlined" />
        )}
      />
      <ProductDetail product={selectedProduct} open={open} onClose={handleClose} />
    </div>
  );
};

export default Search;
