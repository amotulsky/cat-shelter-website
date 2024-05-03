import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CatGallery from './components/CatGallery';
import FavoritesDropdown from './components/FavoritesDropdown';  // Assuming you have created this component

function App() {
    const [favorites, setFavorites] = useState({});

    const toggleFavorite = (catId) => {
        setFavorites(prev => ({
            ...prev,
            [catId]: !prev[catId]  // Toggle the favorite state correctly
        }));
    };

    return (
        <div className="App">
            <Navbar />
            <FavoritesDropdown favorites={favorites} />  
            <CatGallery toggleFavorite={toggleFavorite} breedId="someBreedId" />
        </div>
    );
}

export default App;
