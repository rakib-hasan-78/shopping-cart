import React from 'react';

const Rating = ({ rating = 0, size = 'w-6 h-6', className = '' }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const fill = Math.min(Math.max(rating - (i - 1), 0), 1); // Between 0 and 1

    stars.push(
      <div key={i} className={`relative ${size}`}>
        {/* Empty Star */}
        <div
          className={`mask mask-star-2 ${size} absolute inset-0 border border-yellow-400 bg-gray-300/60`}
        ></div>

        {/* Filled Star */}
        {fill > 0 && (
          <div
            className={`mask mask-star-2 ${size} absolute inset-0 bg-yellow-400`}
            style={{
              clipPath: `polygon(0 0, ${fill * 100}% 0, ${fill * 100}% 100%, 0 100%)`,
            }}
          ></div>
        )}
      </div>
    );
  }

  return <div className={`flex gap-1 ${className}`}>{stars}</div>;
};

export default Rating;
