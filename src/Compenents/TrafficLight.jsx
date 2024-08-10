import React, { useState } from 'react';

// read data -> loop array -> get data
// configArray.find(item => item.backgroundColor === 'red') -> find item

// update data -> loop array -> find index -> update data
// const index = configArray.findIndex(item => item.backgroundColor === 'red') -> 0
// configArray[index].next = ....
// const configArray = [
//   {
//     backgroundColor: 'red',
//     duration: 4000,
//     next: 'green'
//   }, 
//   {
//     backgroundColor: 'green',
//     duration: 2000,
//     next: 'yellow'
//   },
//   {
//     backgroundColor: 'yellow',
//     duration: 5000,
//     next: 'red'
//   },
// ]


// hash object {}
// read data -> config['red'].backgroundColor
// update data -> config['red'].next = xxx
const config = {
  red: {
    backgroundColor: 'red',
    duration: 4000,
    next: 'green'
  },
  green: {
    backgroundColor: 'green',
    duration: 2000,
    next: 'yellow'
  },
  yellow: {
    backgroundColor: 'yellow',
    duration: 5000,
    next: 'red'
  },
}

const TrafficLight = () => {
  const [currentColor, setCurrentColor] = React.useState('red');

  React.useEffect(() => {
    const duration = config[currentColor].duration;
    const next = config[currentColor].next;
    const timer = setTimeout(() => {
      setCurrentColor(next);
    }, duration)
    
    return () => {
      // run every component re-render
      clearTimeout(timer)
    } // clean up function of useEffect
  }, [currentColor]); // run once

  return (
    <div className="traffic_container">
      <div>Current color: {currentColor}</div>
      <div className="traffic-light-container traffic-light-container--vertical">
        {Object.keys(config).map(color => {
          const bgColor = color === currentColor ? config[color].backgroundColor: ''
          return (
            <div key={color} className="traffic-light" style={{ backgroundColor: bgColor }} />
          )
        })}
      </div>
    </div>  
  );
};

export default TrafficLight;
