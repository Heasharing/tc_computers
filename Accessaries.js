// src/pages/Laptop.js
import React ,{useState}from 'react';
import AccessoriesData from '../components/product/accesariesdata';
import { useTranslation } from 'react-i18next';
import './stylesheet/Laptop.css';
import { FaStar, FaHeart } from 'react-icons/fa'; // Importing additional icons
import { PiShoppingCartThin } from 'react-icons/pi';
import { BiDetail } from "react-icons/bi";
import { RiDiscountPercentLine } from "react-icons/ri";


const Acessaries = ({sortBy}) => {
  const { t } = useTranslation();
  // Create useState of Star Rating
  const [ratings, setRatings] = useState(
    AccessoriesData.reduce((acc, laptop) => {
      acc[laptop.id] = 0; // Initializing all ratings to 0
      return acc;
    }, {})
  );

  // Toggle the rating: if the current rating is the same as the clicked rating, clear it
  const handleRatingClick = ( productId, rating) => {
   
   // setRatings({ ...ratings, [productId]: rating });
   setRatings({ ...ratings, [productId]: ratings[productId] === rating ? 0 : rating });
  };

  // Rating star double click to cancel
  const handleRatingDoubleClick = (productId) => {
    setRatings({ ...ratings, [productId]: 0 });
  };

  // Dynamic sorting based on the sortBy parameter
  const sortedData = [...AccessoriesData].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  return (
    <>
      <h1>{t('accessaries')}</h1>
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
                  <FaHeart className="icon favorite-icon" title="Add to favorites" />
                  <PiShoppingCartThin className="icon cart-icon" title="Add to cart" />
                  <BiDetail className="icon detail-icon" title="View details" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
  
};

export default Acessaries;