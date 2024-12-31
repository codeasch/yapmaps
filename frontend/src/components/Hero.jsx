import { useState, useEffect } from 'react'
import MainYapLogo from '../assets/logo/MainYapLogo.png'

const mapImages = [
  'https://via.placeholder.com/1920x1080/4A90E2/ffffff?text=Fortnite+Map+1',
  'https://via.placeholder.com/1920x1080/50E3C2/ffffff?text=Fortnite+Map+2',
  'https://via.placeholder.com/1920x1080/F5A623/ffffff?text=Fortnite+Map+3',
  'https://via.placeholder.com/1920x1080/D0021B/ffffff?text=Fortnite+Map+4',
  'https://via.placeholder.com/1920x1080/7ED321/ffffff?text=Fortnite+Map+5',
  'https://via.placeholder.com/1920x1080/9013FE/ffffff?text=Fortnite+Map+6',
  'https://via.placeholder.com/1920x1080/4A4A4A/ffffff?text=Fortnite+Map+7',
  'https://via.placeholder.com/1920x1080/BD10E0/ffffff?text=Fortnite+Map+8',
  'https://via.placeholder.com/1920x1080/50E3C2/ffffff?text=Fortnite+Map+9',
  'https://via.placeholder.com/1920x1080/FF6B6B/ffffff?text=Fortnite+Map+10',
  'https://via.placeholder.com/1920x1080/4ECDC4/ffffff?text=Fortnite+Map+11',
  'https://via.placeholder.com/1920x1080/45B7D1/ffffff?text=Fortnite+Map+12',
  'https://via.placeholder.com/1920x1080/FF9FF3/ffffff?text=Fortnite+Map+13',
  'https://via.placeholder.com/1920x1080/54A0FF/ffffff?text=Fortnite+Map+14',
  'https://via.placeholder.com/1920x1080/5F27CD/ffffff?text=Fortnite+Map+15',
  'https://via.placeholder.com/1920x1080/FF6B6B/ffffff?text=Fortnite+Map+16',
]

export default function Hero() {
  const [visibleImages, setVisibleImages] = useState([]);
  const [contentOpacity, setContentOpacity] = useState(0);

  useEffect(() => {
    const showImage = (index) => {
      setVisibleImages(prev => [...prev, index]);
      setTimeout(() => {
        const imgElement = document.getElementById(`map-image-${index}`);
        if (imgElement) {
          imgElement.style.transform = 'scale(1)';
        }
      }, 50);
    };

    mapImages.forEach((_, index) => {
      const delay = Math.random() * 2000 + 500; // Random delay between 500ms and 2500ms
      setTimeout(() => showImage(index), delay);
    });

    setTimeout(() => setContentOpacity(1), 2500); // Show content after images have started appearing

    return () => {
      setVisibleImages([]);
      setContentOpacity(0);
    };
  }, []);

  return (
    <section className="relative h-[calc(90vh-20px)] overflow-hidden bg-gradient-to-br from-yellow-600 to-orange-500">
      {/* Stronger black tint overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Background Grid Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          style={{
            width: '2000px',
            height: '1125px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(4, 1fr)',
            gap: '16px',
            padding: '12px',
            transform: 'rotate(12deg)',
            position: 'absolute',
            left: '50%',
            top: '50%',
            marginLeft: '-1000px',
            marginTop: '-562.5px',
          }}
        >
          {mapImages.map((src, index) => (
            <div
              key={index}
              id={`map-image-${index}`}
              className="relative w-full h-full"
              style={{
                filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.25))',
                opacity: visibleImages.includes(index) ? 1 : 0,
                transform: `scale(${visibleImages.includes(index) ? 1 : 0.8})`,
                transition: 'opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <div
                className="absolute inset-0 rounded-3xl overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Fortnite Map ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div 
        className="relative z-20 container mx-auto px-4 h-full flex flex-col items-center justify-center"
        style={{
          opacity: contentOpacity,
          transition: 'opacity 1s ease-in'
        }}
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <img
              src={MainYapLogo}
              alt="YapMaps Logo"
              className="w-32 h-32 drop-shadow-2xl"
            />
          </div>
          <p className="text-3xl md:text-5xl mb-12 text-white drop-shadow-md font-bold">
            Where fun meets creativity!
          </p>
          <div className="flex justify-center">
            <a
              href="#featured-maps"
              className="bg-yap-red hover:bg-yap-red/80 text-white px-10 py-5 rounded-full text-2xl font-bold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

