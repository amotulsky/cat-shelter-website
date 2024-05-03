import React from 'react';

function FavoritesDropdown({ favorites }) {
    const favoriteCats = Object.keys(favorites).filter(key => favorites[key]);

    return (
        <div className="favorites-dropdown">
            {favoriteCats.length > 0 ? (
                favoriteCats.map(catId => (
                    <div key={catId}>Cat {catId} Favorited</div>
                ))
            ) : (
                <div>No Favorites</div>
            )}
        </div>
    );
}

export default FavoritesDropdown;
