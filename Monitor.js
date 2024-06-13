// src/pages/Laptop.js
import React, {useState} from 'react';
import MonitorData from '../components/product/Monitordata';
import dis from '../components/images/discount.png';
import { FaStar, FaHeart, } from 'react-icons/fa'; // Importing additional icons
import { PiShoppingCartThin } from 'react-icons/pi';
import { BiDetail } from "react-icons/bi";
import './stylesheet/Laptop.css';
import { useTranslation } from 'react-i18next';


const MonitorPage = ({sortBy}) => {
  
  //Create useState of Star Rating
  //Initializing all rating to 0
  const {t} = useTranslation();
  //Using .reduce object

  const [ratings, setRatings] = useState(
    MonitorData.reduce((acc, monitor) => {
      acc[monitor.id] = 0; // Initializing all ratings to 0
      return acc;
    }, {})
  )

  //Rating star handle click function
  

  const handleRatingClick = (productId, rating) =>{
    // setRatings({ ...ratings, [productId]: rating });
    setRatings({ ...ratings, [productId]: ratings[productId] === rating ? 0 : rating });
  };


  //Rating star double click to cancel
  const handleRatingDoubleClick = (productId) => {
    setRatings({ ...ratings, [productId]: 0 });
  };

  
  // Dynamic sorting based on the sortBy parameter
  const sortedData = [...MonitorData].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  return (

    <>
      <h1>{t('monitor')}</h1>
      <div className="Laptop-grid">
        {sortedData.map(product => {
          const discountPercentage = product.discount ? (product.discountAmount / product.price) * 100 : 0;

          return (
            <div key={product.id} className="laptop-card">
              {product.discount && <div className="discount-label">
              <span className='dis-lb-ribbon'>{discountPercentage.toFixed()}<img className='dis-icon' src={dis}/> OFF</span> </div>}
              <img src={product.image} alt={product.name}/>
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
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
    </> 

  );


};

export default MonitorPage;