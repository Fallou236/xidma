import React, { useState } from 'react';

const equipeMembers = [
  {
    photo: 'aly.png',
    name: 'Baye Aly THIAM',
    role: 'Jeuwrign xidmatul xaddim ',
  },
  {
    photo: 'kine.png',
    name: 'Soxna Kine',
    role: 'Jeuwrign soxna yi',
  },
  {
    photo: 'alif.png',
    name: 'Serigne Alif MBOW',
    role: 'Jeuwrign Kurel 1 xidmatul xaddim',
  },
  // Ajoute plus de membres ici
];

const EquipeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % equipeMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? equipeMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-semibold mb-6">Bureau Xidmatul Xaddim</h2>
      <div className="relative flex justify-center items-center">
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer"
          onClick={prevSlide}
        >
          &#10094;
        </button>

        <div className="flex justify-center items-center w-4/5 overflow-hidden">
          <div className="text-center">
            <img
              className="w-48 h-48 rounded-full object-cover mx-auto"
              src={equipeMembers[currentIndex].photo}
              alt={equipeMembers[currentIndex].name}
            />
            <p className="mt-4 text-xl font-medium">{equipeMembers[currentIndex].name}</p>
            <p className="text-lg text-gray-500">{equipeMembers[currentIndex].role}</p>
          </div>
        </div>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default EquipeCarousel;
