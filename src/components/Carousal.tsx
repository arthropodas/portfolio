// components/Carousel.tsx

import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      id: 1,
      title: 'Item 1',
      description: 'Description for item 1.',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'Description for item 2.',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      id: 3,
      title: 'Item 3',
      description: 'Description for item 3.',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    // Add more items as needed
  ];

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 5000); // Adjust interval time as needed (5000ms = 5 seconds)

    return () => clearInterval(interval);
  }, [currentIndex, items.length]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`w-full transition-transform duration-500 transform ${
                index === currentIndex ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="p-4 bg-white shadow-lg rounded-lg">
                <img src={item.imageUrl} alt={item.title} className="h-48 w-full object-cover mb-4" />
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute inset-y-0 left-0 flex items-center justify-center w-12 bg-gray-200 text-gray-700 hover:bg-gray-300"
        onClick={prevSlide}
      >
        <FaChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute inset-y-0 right-0 flex items-center justify-center w-12 bg-gray-200 text-gray-700 hover:bg-gray-300"
        onClick={nextSlide}
      >
        <FaChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Carousel;
