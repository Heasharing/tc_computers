import React from 'react';
import Search from './Search';
import mockData1 from '../path/to/mockData1';
import mockData2 from '../path/to/mockData2';
// Import other mock data files as needed

const allProducts = [...mockData1, ...mockData2];
// Merge other mock data arrays as needed

const SearchContainer = () => {
  return <Search products={allProducts} />;
};

export default SearchContainer;
