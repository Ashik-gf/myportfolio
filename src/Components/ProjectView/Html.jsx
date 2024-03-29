import React, { useState, useEffect } from 'react';

const ProgressBar = ({ value, maxValue }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Calculate the width of the progress bar based on the provided value and maxValue
    const progressWidth = (value / maxValue) * 100;
    setWidth(progressWidth);
  }, [value, maxValue]);

  return (
    <div>
      <div
        style={{
          width: `${width}%`,
          height: '20px',
          backgroundColor: 'green',
          borderRadius: '5px',
          textAlign: 'center',
          color: 'white',
        }}
      >
        {`${value}/${maxValue}`}
      </div>
    </div>
  );
};

export default ProgressBar;
