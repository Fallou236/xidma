import React, { useState } from 'react';
import { X, Filter, Plus } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleImages, setVisibleImages] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const images = [
    {
      url: "/c16.jpg",
      title: "Ziar General 2024",
      category: "ziar-2024"
    },
    {
      url: "c2.jpg",
      title: "Ziar General 2024",
      category: "ziar-2024"
    },
    {
      url: "/c3.jpg",
      title: "Ziar General 2024",
      category: "ziar-2024"
    },
    {
      url: "/c4.jpg",
      title: "Ziar General 2024",
      category: "ziar-2024"
    },
    {
      url: "/c7.jpg",
      title: "Ziar General 2024",
      category: "ziar-2024"
    },
    {
      url: "/c9.jpg",
      title: "Ziar General 2024",
      category: "ziar-2024"
    },
    {
      url: "/c11.jpg",
      title: "Ziar General 2023",
      category: "ziar-2023"
    },
    {
      url: "/c12.jpg",
      title: "Rencontre 2024, Ndondol",
      category: "rencontre-2024"
    },
    {
      url: "/c13.jpg",
      title: "Rencontre 2024, Ndondol",
      category: "rencontre-2024"
    },
    {
      url: "/c8.jpg",
      title: "Ziar General 2024",
      category: "ziar-2024"
    },
    {
      url: "/c5.jpg",
      title: "Ziar General 2024",
      category: "ziar-2024"
    },
    {
      url: "/c6.jpg",
      title: "Ziar General 2024",
      category: "ziar-2024"
    },
    {
      url: "/c10.jpg",
      title: "Ziar General 2023",
      category: "ziar-2023"
    },
    

  ];

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'ziar-2023', name: 'Ziar 2023' },
    { id: 'ziar-2024', name: 'Ziar 2024' },
    { id: 'rencontre-2024', name: 'Rencontre 2024' }
  ];

  const filteredImages = images.filter(
    image => selectedCategory === 'all' || image.category === selectedCategory
  );

  const displayedImages = filteredImages.slice(0, visibleImages);
  const hasMore = visibleImages < filteredImages.length;

  const loadMore = () => {
    setVisibleImages(prev => prev + 6);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Notre Galerie
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Découvrez les moments forts de nos événements et activités
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setVisibleImages(6);
              }}
              className={`flex items-center px-4 py-2 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors duration-200`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <Plus className="w-5 h-5 mr-2" />
              Voir plus
            </button>
          </div>
        )}

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;