import React, { useState, useEffect } from 'react';
import './stylesheet/Laptop.css';
import LaptopData from '../components/product/Laptopdata';
import { FaStar, FaHeart } from 'react-icons/fa'; // Importing additional icons
import { PiShoppingCartThin } from 'react-icons/pi';
import { BiDetail } from "react-icons/bi";
import { RiDiscountPercentLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';
import {  useFavorites } from '../components/FavoriteContext';
import { useCart } from '../components/CartContext';
import Modal from '../components/Modal'; // Assume you have a Modal component

const LaptopPage = ({ sortBy }) => {
  const { t } = useTranslation();
  const { addToFavorites } =  useFavorites();
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null); // For modal
  
  const { snackbarMessage } = useFavorites();

  useEffect(() => {
    if (snackbarMessage) {
        // Display snackbar message here, e.g., using a snackbar component or a toast library
        alert(snackbarMessage); // For demonstration purposes
    }
    
    
}, [snackbarMessage]);
  
  
  const [ratings, setRatings] = useState(
    LaptopData.reduce((acc, laptop) => {
      acc[laptop.id] = 0; // Initializing all ratings to 0
      return acc;
    }, {})
  );

  const handleRatingClick = (productId, rating) => {
    setRatings({ ...ratings, [productId]: ratings[productId] === rating ? 0 : rating });
  };

  const handleRatingDoubleClick = (productId) => {
    setRatings({ ...ratings, [productId]: 0 });
  };

  const sortedData = [...LaptopData].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  const handleFavoriteClick = (product) => {
    addToFavorites(product);
  };

  const handleCartClick = (product) => {
    addToCart(product);
  };

  const handleDetailClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <h1>{t('laptop')}</h1>
      <div>
        <div className="Laptop-grid">
          {sortedData.map(product => {
            const discountPercentage = product.discount ? (product.discountAmount / product.price) * 100 : 0;

            return (
              <div key={product.id} className="laptop-card">
                {product.discount && (
                  <div className="discount-label">
                    <span className='dis-lb-ribbon'>{discountPercentage.toFixed()}<RiDiscountPercentLine className='dis-icon' color='#fff' />OFF</span>
                  </div>
                )}
                <img className="product-image" src={product.image} alt={product.name}></img>
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <p className='description-container'>Description: {product.description}</p>
                <div className="star-rating">
                  {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                      <FaStar
                        key={ratingValue}
                        size={20}
                        color={ratingValue <= ratings[product.id] ? "#ffc107" : "#e4e5e9"}
                        onClick={() => handleRatingClick(product.id, ratingValue)}
                        onDoubleClick={() => handleRatingDoubleClick(product.id)}
                        style={{ cursor: "pointer" }}
                      />
                    );
                  })}
                </div>
                <div className="icon-bar">
                  <FaHeart className="icon favorite-icon" title="Add to favorites" onClick={() => handleFavoriteClick(product)} />
                  <PiShoppingCartThin className="icon cart-icon" title="Add to cart" onClick={() => handleCartClick(product)} />
                  <BiDetail className="icon detail-icon" title="View details" onClick={() => handleDetailClick(product)} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedProduct && (
        <Modal onClose={closeModal}>
          <div className="modal-content">
            <h2>{selectedProduct.name}</h2>
            <img className="product-image" src={selectedProduct.image} alt={selectedProduct.name}></img>
            <p>Price: ${selectedProduct.price}</p>
            <p>Description: {selectedProduct.description}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default LaptopPage;
