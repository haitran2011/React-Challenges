import React, { useState } from 'react';

const ColorBox = ({ color }) => {
  const [currentColor, setCurrentColor] = useState(color);
  const colors = ['red', 'yellow', 'aqua', 'purple'];

  const toggleColor = () => {
    const nextColorIndex = (colors.indexOf(currentColor) + 1) % colors.length;
    const nextColor = colors[nextColorIndex];
    setCurrentColor(nextColor);
  };

  return (
    <div
      className={`color-box ${currentColor}`}
      onClick={toggleColor}
    ></div>
  );
};

export default ColorBox;