import React, { useState } from 'react';
import animalsImage from './assets/themes/animals.png';
import sportsImage from './assets/themes/sports.png';
import transportationImage from './assets/themes/transportation.png';
import musicImage from './assets/themes/music.png';
import foodImage from './assets/themes/food.png';
import natureImage from './assets/themes/nature.png';

export default function ThemesGrid({ onStart }) {
  const [selection, setSelection] = useState('');

  const themes = [
    { name: "animals", src: animalsImage },
    { name: "sports", src: sportsImage },
    { name: "transportation", src: transportationImage },
    { name: "music", src: musicImage },
    { name: "food", src: foodImage },
    { name: "nature", src: natureImage },
  ];

  const handleImageClick = (themeName) => {
    setSelection(themeName);
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-lg">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to SimpleGuess!
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Choose a theme and click to reveal the crafted ASCII art hidden beneath. Sharpen your senses and let your imagination decode the canvas. Ready, set, guess!
          </p>
        </div>
      </div>

       {/* Reduced padding for closer alignment */}
       <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:flex-1">
            {themes.map((theme, index) => (
              <button 
                key={index} 
                className={`overflow-hidden rounded-3xl transform transition duration-300 hover:scale-110 flex justify-center items-center ${selection === theme.name ? 'ring-4 ring-indigo-500' : 'ring-2 ring-transparent'} `}
                onClick={() => handleImageClick(theme.name)}
                style={{ aspectRatio: '1 / 1' }}
              >
                <div className="h-40 w-40 flex justify-center items-center">
                  <img
                    src={theme.src}
                    alt={theme.name}
                    className="max-h-full max-w-full object-cover rounded-3xl"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>


      <div className="text-center py-4">
      <button
              className={`mt-4 px-4 py-2 border rounded-md ${selection ? 'border-transparent bg-blue-600 text-white hover:bg-blue-700' : 'border-gray-200 bg-gray-200 text-gray-500 cursor-not-allowed'}`}
              disabled={!selection}
              onClick={() => onStart(selection)}
            >
              Start
            </button>
      </div>


    </div>
  );
}