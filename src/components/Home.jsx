
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [showLetter, setShowLetter] = useState(false);
  const navigate = useNavigate(); 

  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-5xl font-semibold mb-18 text-pink-500">
        Pull out the letter!
      </h1>

      <div className="relative w-64 h-48 overflow-visible">
        {/* Letter */}
        <div
          className={`
            absolute bottom-0 left-0 w-full h-32
            bg-white border border-rose-800 rounded-md p-4 shadow-md
            transform transition-all duration-700 ease-out
            ${
              showLetter
                ? '-translate-y-full opacity-100 z-40'
                : 'translate-y-full opacity-0 z-20'
            }
          `}
        >
          <p className="text-sm text-gray-800">
            Happy Birthday, Babe! <span className="text-pink-500">💗</span>
            <br />
            You know, you are the best gift I have ever received in my life.
            Thank you for coming into my life, baby.
            <br />
            I love you O marina❤️
          </p>
        </div>

        {/* Envelope */}
        <div className="absolute inset-0 bg-rose-100 border border-rose-800 rounded-sm z-30" />
        <div
          className="absolute inset-x-0 top-0 h-1/2 bg-rose-200 z-30"
          style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
        />

        {/* Heart seal */}
        <div
          onClick={() => setShowLetter(true)}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                     bg-white p-2 rounded-full shadow-md cursor-pointer z-50"
        >
          <span className="text-pink-500 text-2xl">❤️</span>
        </div>
      </div>

      {/* Blue Open Letter button */}
      <button
        onClick={() => navigate('/surprise')}
        className="mt-8 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg duration-200 transition cursor-pointer hover:bg-blue-600 "
      >
        Open Babe💗
      </button>
    </div>
  );
} 