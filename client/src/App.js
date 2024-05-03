import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CatGallery from './components/CatGallery';
import BreedList from './components/BreedList';
import './App.css';

function App() {
    const [breedId, setBreedId] = useState('');

    return (
        <div className="App">
            <Navbar />
            <BreedList onBreedSelect={setBreedId} />
            <CatGallery breedId={breedId} />
        </div>
    );
}

export default App;
