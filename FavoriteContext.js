import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const addToFavorites = (item) => {
        console.log(item);
        setFavorites((prevFavorites) => {
            if (prevFavorites.some(fav => fav.id === item.id)) {
              setSnackbarMessage('Item is already in favorites.');
                return prevFavorites;
            }
            
            return [...prevFavorites, item];
        });
    };

    const removeFromFavorites = (itemId) => {
      setSnackbarMessage('Favorite is removed.')
      setFavorites((prevFavorites) => prevFavorites.filter(fav => fav.id !== itemId));
     
    };
    

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, snackbarMessage }}>
            {children}
        </FavoritesContext.Provider>
    );
};
