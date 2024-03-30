import React, { useState } from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import Grid from '../Grid/Grid';
import ThemesGrid from '../../ThemesGrid';

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
];

export default function BodySection() {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [asciiArtFromApi, setasciiArtFromApi] = useState([]); // State to hold the ASCII art

  const handleStartGame = async (theme) => {
    setSelectedTheme(theme);

    try {
      const response = await fetch('http://localhost:4000/api/ascii/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ theme: theme }),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      
      // Make sure to access the 'characters' key of the response data


      setasciiArtFromApi(data.characters);
    } catch (error) {
      console.error('There was an issue fetching the ASCII art:', error);
      // Keep the error handling as is, setting to an empty array if there's an issue
      setasciiArtFromApi([]);
    }
    
  };

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <ThemesGrid onStart={handleStartGame} />
          <Grid asciiArtFromApi={asciiArtFromApi} /> {/* Pass the ASCII art to the Grid component */}
        </div>
      </div>
    </div>
  );
}
