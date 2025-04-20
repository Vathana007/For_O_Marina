import React, { useState } from 'react';
import Marina1 from '../assets/Marina1.jpg';
import Marina2 from '../assets/Marina2.jpg';
import Marina3 from '../assets/Marina3.jpg';
import Marina4 from '../assets/Marina4.jpg';
import Marina5 from '../assets/Marina5.jpg';
import Marina7 from '../assets/Marina7.jpg';
import Marina8 from '../assets/Marina8.jpg';
import Marina10 from '../assets/Marina10.jpg';
import Marina11 from '../assets/Marina11.jpg';
import Special1 from '../assets/Special1.jpg';

export default function Surprise() {
  const images = [
    Marina1, Marina2, Marina3, Marina4, Marina5,
    Marina7, Marina8, Marina10, Marina11, Special1,
  ];
  const [showBox, setShowBox] = useState(true);
  const [index, setIndex] = useState(0);

  const handleBoxClick = () => setShowBox(false);
  const handleImageClick = () => {
    if (index < images.length - 1) {
      setIndex(i => i + 1);
    }
  };

  // generate N hearts with random positions/delays/durations
  const renderHearts = (count = 10) => {
    const hearts = [];
    for (let i = 0; i < count; i++) {
      const left = Math.random() * 90 + 5;             // between 5% and 95%
      const delay = Math.random() * 1.5;               // up to 1.5s
      const duration = 2 + Math.random() * 2;          // 2–4s
      const size = 1 + Math.random() * 1;              // 1–2rem
      hearts.push(
        <span
          key={i}
          className="heart"
          style={{
            left: `${left}%`,
            fontSize: `${size}rem`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        >
          ❤️
        </span>
      );
    }
    return hearts;
  };

  return (
    <div className="w-screen h-screen bg-pink-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {showBox ? (
        /* 🎁 Gift box */
        <div
          onClick={handleBoxClick}
          className="relative w-64 h-48 cursor-pointer select-none"
          title="Click to open"
        >
          <div className="absolute inset-0 bg-red-500 rounded shadow-md" />
          <div className="absolute inset-y-0 left-1/2 w-8 bg-yellow-300 transform -translate-x-1/2" />
          <div
            className="absolute inset-x-0 top-0 h-12 bg-yellow-300"
            style={{ clipPath: 'polygon(0 0,100% 0,85% 100%,15% 100%)' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-3xl font-bold italic">
              Click Me!
            </span>
          </div>
        </div>
      ) : (
        /* 📸 Photo viewer */
        <>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Pretty Girl #{index + 1} 💗
          </h2>

          <div
            onClick={handleImageClick}
            className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm max-h-96
                       cursor-pointer transition-transform duration-300 hover:scale-105"
            title={
              index < images.length - 1
                ? 'Click to see the next surprise'
                : 'That was the last one!'
            }
          >
            <img
              src={images[index]}
              alt={`Surprise ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="mt-4 text-gray-700 text-center">
            {index < images.length - 1
              ? 'Click the image to continue →'
              : 'I hope we go through everything together, baby🥰💗. B sl o kbal khoch❤️💋'}
          </p>

          {/* Floating hearts once on the last image */}
          {index === images.length - 1 && renderHearts(12)}
        </>
      )}
    </div>
  );
}
