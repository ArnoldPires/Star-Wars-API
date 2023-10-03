import React, { useState, useEffect } from 'react';

function StarShips() {
  const [state, setState] = useState({ starships: [], isLoading: true });

  useEffect(() => {
    async function fetchStarships() {
      try {
        const response = await fetch('https://swapi.dev/api/starships/');
        if (response.ok) {
          const data = await response.json();
          const allStarships = data.results;

          if (Array.isArray(allStarships)) {
            // Shuffle the array randomly
            const randomStarships = shuffleArray(allStarships);
            
            // Slice the array to contain only the first 10 starships
            setState({ starships: randomStarships.slice(0, 10), isLoading: false });
          }
        }
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    }

    fetchStarships();
  }, []); // Empty dependency array means this effect will only run once after the initial render

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div>
      <h2>Starships</h2>
      {state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {state.starships.map((starship) => (
            <li key={starship.name}>
              {starship.name}<br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StarShips;