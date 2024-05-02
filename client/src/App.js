import React from 'react';
import Navbar from './components/Navbar';  // Make sure the path matches where you've saved your Navbar
import CatGallery from './components/CatGallery';  // Make sure the path matches where you've saved your CatGallery
import './App.css';  // Assuming you have some basic styles you want to apply

function App() {
  return (
    <div className="App">
      <Navbar />  // This places your Navbar component at the top of the app
      <CatGallery />  // This will display the gallery of cats below the navbar
    </div>
  );
}

export default App;
