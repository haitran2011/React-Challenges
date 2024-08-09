import React, { useState } from 'react';

const TrafficLight = () => {
  const [currentColor, setCurrentColor] = useState('green');

  const lightIntervals = [
    { color: 'green', duration: 3000 },
    { color: 'yellow', duration: 500 },
    { color: 'red', duration: 4000 },
  ];

  const changeLight = (index) => {
    setCurrentColor(lightIntervals[index].color);
    const nextIndex = (index + 1) % lightIntervals.length;
    setTimeout(() => changeLight(nextIndex), lightIntervals[nextIndex].duration);
  };

  
  changeLight(0);

  return (
    <div className="traffic-light">
      <div className={`light ${currentColor}`}></div>
    </div>
  );
};

export default TrafficLight;
