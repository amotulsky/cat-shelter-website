





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CatGallery.css';

function CatGallery({ breedId }) {
    const [cats, setCats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [favorites, setFavorites] = useState({}); // Tracks favorites

    useEffect(() => {
        if (!breedId) return;
        setIsLoading(true);
        const fetchCats = async () => {
            try {
                const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=10`, {
                    headers: {
                        'x-api-key': 'https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&limit=10'  // Ensure you replace 'YOUR_API_KEY' with your actual API key
                    }
                });
                setCats(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching cats by breed:", error);
                setIsLoading(false);
            }
        };

        fetchCats();
    }, [breedId]);

    function toggleFavorite(catId) {
        setFavorites(prev => ({
            ...prev,
            [catId]: !prev[catId]
        }));
    }

    return (
        <div className="gallery">
            <h2>Cat Gallery</h2>
            {isLoading ? <p>Loading...</p> : (
                <div className="images">
                    {cats.map(cat => (
                        <div key={cat.id} className="cat-image">
                            <img src={cat.url} alt="Cat" />
                            <button 
                                onClick={() => toggleFavorite(cat.id)}
                                className={`favorite-button ${favorites[cat.id] ? 'favorited' : ''}`}
                            >
                                ❤️
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CatGallery;
