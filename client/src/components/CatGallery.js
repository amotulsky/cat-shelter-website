import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CatGallery() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const fetchCats = async () => {
            const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10', {
                headers: {
                    'x-api-key': 'live_csDCRXY18kdJjA9eVjsjMsXybufBe3lqhNI1uMTeIQRA9aCOblql9vI3q9NDQAvm'
                }
            });
            setCats(response.data);
        };

        fetchCats();
    }, []);

    return (
        <div>
            <h2>Cat Gallery</h2>
            <div>
                {cats.map(cat => (
                    <img key={cat.id} src={cat.url} alt="Cat" width="200" />
                ))}
            </div>
        </div>
    );
}

export default CatGallery;
