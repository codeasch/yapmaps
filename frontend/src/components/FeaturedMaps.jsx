const featuredMaps = [
    { id: 1, name: 'Yap City', code: 'ABC123', image: 'https://via.placeholder.com/400x300.png?text=Yap+City' },
    { id: 2, name: 'Yap Island', code: 'DEF456', image: 'https://via.placeholder.com/400x300.png?text=Yap+Island' },
    { id: 3, name: 'Yap Mountain', code: 'GHI789', image: 'https://via.placeholder.com/400x300.png?text=Yap+Mountain' },
  ]
  
  export default function FeaturedMaps() {
    return (
      <section id="featured-maps" className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-yap-yellow-dark">Featured Maps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMaps.map((map) => (
              <div key={map.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img src={map.image} alt={map.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{map.name}</h3>
                  <p className="text-gray-600 mb-4">Island Code: {map.code}</p>
                  <div className="flex justify-between">
                    <button className="bg-yap-red hover:bg-yap-yellow-bright text-white px-4 py-2 rounded transition-colors duration-300">
                      Play Now
                    </button>
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
    )
  }
  
  