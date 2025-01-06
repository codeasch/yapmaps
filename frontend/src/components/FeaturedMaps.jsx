import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import islandsData from '../data/islands.json';

export default function FeaturedMaps() {
  const [featuredMaps, setFeaturedMaps] = useState([]);

  useEffect(() => {
    setFeaturedMaps(islandsData.islands);
  }, []);

  return (
    <section id="featured-maps" className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-yap-yellow-dark">Featured Maps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredMaps.map((map) => (
            <div key={map.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={map.thumbnailImage} alt={map.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{map.title}</h3>
                <p className="text-gray-600 mb-4">{map.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {map.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">Island Code: {map.code}</p>
                <div className="flex justify-between">
                  <Link
                    to={`/${map.code}`}
                    className="bg-yap-red hover:bg-yap-yellow-bright text-white px-4 py-2 rounded transition-colors duration-300"
                  >
                    View Details
                  </Link>
                  <button className="bg-gray-800 hover:bg-yap-yellow-dark text-white px-4 py-2 rounded transition-colors duration-300">
                    Copy Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

