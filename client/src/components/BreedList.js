import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BreedList({ onBreedSelect }) {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        const fetchBreeds = async () => {
            try {
                const response = await axios.get('https://api.thecatapi.com/v1/breeds', {
                    headers: {
                        'x-api-key': 'https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&limit=10'
                    }
                });
                setBreeds(response.data);
            } catch (error) {
                console.error("Error fetching breeds:", error);
            }
        };

        fetchBreeds();
    }, []);

    const handleBreedChange = (event) => {
        onBreedSelect(event.target.value);
    };

    return (
        <div>
            <select onChange={handleBreedChange} defaultValue="">
                <option value="" disabled>Choose a breed</option>
                {breeds.map(breed => (
                    <option key={breed.id} value={breed.id}>
                        {breed.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default BreedList;
