import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CatGallery.css';

function CatGallery({ breedId }) {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        if (!breedId) return;  // Do not fetch unless a breed ID is specified
        const fetchCats = async () => {
            try {
                const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=10`, {
                    headers: {
                        'x-api-key': 'https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&limit=10'
                    }
                });
                setCats(response.data);
            } catch (error) {
                console.error("Error fetching cats by breed:", error);
            }
        };

        fetchCats();
    }, [breedId]);

    return (
        <div className="gallery">
            <h2>Cat Gallery</h2>
            <div className="images">
                {cats.map(cat => (
                    <img key={cat.id} src={cat.url} alt="Cat" />
                ))}
            </div>
        </div>
    );
}

export default CatGallery;