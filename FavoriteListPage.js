// FavoriteListPage.js
import React, { useState } from 'react';
import { useFavorites } from '../components/FavoriteContext';
import './stylesheet/FavoritePage.css';
import { MdDeleteForever } from "react-icons/md";

const FavoriteListPage = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  
  const {Exist, isEmpty} = useState('');

  return (
    <div>
      <h1>Favorite</h1>
      <div className="Laptop-grid">
        {favorites.map(product => (
          <div key={product.id} className="laptop-card">
            <img className="product-image" src={product.image} alt={product.name}></img>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <MdDeleteForever size={30} onClick={() => removeFromFavorites(product.id)}/>
          </div>
        ))}
      </div>
      {isEmpty && (<h1 align='center'>No Favorite Added!</h1>)
     

      }
    </div>

  );
};

export default FavoriteListPage;
