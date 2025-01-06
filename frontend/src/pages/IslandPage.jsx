import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Copy, Play, Share2, Heart, Users, ChevronRight } from 'lucide-react';
import islandsData from '../data/islands.json';

export default function IslandPage() {
  const { code } = useParams();
  const [island, setIsland] = useState(null);
  const [activePlayers, setActivePlayers] = useState(Math.floor(Math.random() * 1000));
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const foundIsland = islandsData.islands.find(i => i.code === code);
    setIsland(foundIsland);

    const interval = setInterval(() => {
      setActivePlayers(prev => Math.max(0, prev + Math.floor(Math.random() * 21) - 10));
    }, 5000);

    return () => clearInterval(interval);
  }, [code]);

  if (!island) {
    return (
      <div className="min-h-screen bg-black pt-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Island Not Found</h1>
          <p>Sorry, we couldn't find an island with the code: {code}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Banner */}
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <img 
            src={island.thumbnailImage} 
            alt={island.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 text-white drop-shadow-lg">
            {island.title}
          </h1>
          <p className="text-lg text-white/90 mb-4">by YapMaps</p>
        </div>
      </div>

      {/* Action Bar */}
      <div className="bg-black/90 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button className="bg-yap-yellow-bright hover:bg-yap-yellow-dark text-black px-6 py-3 rounded-lg font-bold text-lg transition-colors flex items-center gap-2">
                <Play className="w-5 h-5" /> PLAY NOW
              </button>
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`${
                  isLiked ? 'bg-yap-red text-white' : 'bg-white/10 text-white'
                } p-3 rounded-lg transition-colors`}
              >
                <Heart className="w-5 h-5" />
              </button>
              <button className="bg-white/10 p-3 rounded-lg text-white hover:bg-white/20 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-yap-yellow-bright" />
                <span className="font-bold">{activePlayers}</span>
                <span className="text-white/70">Active</span>
              </div>
              <button className="bg-white/10 px-4 py-2 rounded-lg font-mono text-sm hover:bg-white/20 transition-colors flex items-center gap-2">
                {island.code}
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">About this island</h2>
              <p className="text-white/80 mb-4">{island.description}</p>
              <div className="space-y-2">
                {island.objectives.map((objective, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-yap-yellow-bright">•</span>
                    <span>{objective}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Media gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {island.screenshots.map((screenshot, index) => (
                  <img 
                    key={index}
                    src={screenshot}
                    alt={`${island.title} screenshot ${index + 1}`}
                    className="aspect-video object-cover rounded-lg"
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Island Details</h3>
              <div className="space-y-4 text-white/80">
                <div>
                  <strong className="block text-white">Game Mode</strong>
                  {island.gameMode}
                </div>
                <div>
                  <strong className="block text-white">Players</strong>
                  {island.playerCount.min} - {island.playerCount.max}
                </div>
                <div>
                  <strong className="block text-white">Difficulty</strong>
                  {island.difficulty}
                </div>
                <div className="flex flex-wrap gap-2">
                  {island.tags.map(tag => (
                    <span key={tag} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">More by YapMaps</h3>
                <ChevronRight className="w-5 h-5" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {islandsData.islands.slice(0, 2).map((otherIsland) => (
                  <div key={otherIsland.id} className="group cursor-pointer">
                    <img 
                      src={otherIsland.thumbnailImage}
                      alt={otherIsland.title}
                      className="aspect-video object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-bold group-hover:text-yap-yellow-bright transition-colors">
                      {otherIsland.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

