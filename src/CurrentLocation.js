import React, { useState, useEffect } from 'react';

function CurrentLocation() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Villa kom upp við að ná í staðsetningu: ', error);
        }
      );
    } else {
      console.log('Staðsetning ekki tiltæk');
    }
  }, []);

  return (
    <div>
      <h1>Þú ert hér...</h1>
      {location ? (
        <p>Breiddargráða: {location.latitude}, Lengdargráða: {location.longitude}</p>
      ) : (
        <p>Sæki staðsetningu...</p>
      )}
    </div>
  );
}

export default CurrentLocation;
