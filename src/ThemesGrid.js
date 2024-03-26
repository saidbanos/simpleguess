import React from 'react';
import animalsImage from './assets/themes/animals.png';
import sportsImage from './assets/themes/sports.png';
import transportationImage from './assets/themes/transportation.png';
import musicImage from './assets/themes/music.png';
import foodImage from './assets/themes/food.png';
import natureImage from './assets/themes/nature.png';
import Grid from './Components/Grid/Grid';

export default function Example() {
  const images = [
    animalsImage,
    sportsImage,
    transportationImage,
    musicImage,
    foodImage,
    natureImage,
  ];

  return (
    <div className="relative overflow-hidden bg-white">

<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to SimpleGuess!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            Choose a theme and click to reveal the crafted ASCII art hidden beneath. Sharpen your senses and let your imagination decode the canvas!. Ready, set, guess!
            </p>
          </div>
          </div>
         

          <div className="pb-80 pt-4 sm:pb-40 sm:pt-8 lg:pb-48 lg:pt-10"> {/* Adjusted top padding */}
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="lg:flex lg:items-start lg:justify-between">
      <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:flex-1">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-3xl"> {/* Corrected class name for rounding */}
            <img
              src={image}
              alt=""
              className="h-40 w-40 object-cover object-center rounded-3xl" // Corrected class name for rounding
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
